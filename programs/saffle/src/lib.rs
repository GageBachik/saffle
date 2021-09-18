use anchor_lang::prelude::*;
use solana_sdk::timing::timestamp;

declare_id!("3QeRf38fdHBbaXqS87aMJjJtvRGzCvHbcXcHrmncMxpK");

#[program]
pub mod saffle {
    use super::*;
    pub fn sysvars(_ctx: Context<Sysvars>) -> ProgramResult {
        Ok(())
    }
    pub fn create(ctx: Context<Create>, authority: Pubkey) -> ProgramResult {
        let raffle = &mut ctx.accounts.raffle;
        raffle.authority = authority;
        raffle.winner = false;
        Ok(())
    }
    pub fn draw(ctx: Context<Draw>) -> ProgramResult {
        pub fn rand_number(mut seed: u64) -> u64 {
            let a = 1103515245;
            let c = 12345;
            let m = 2 ^ 31;
            seed = (a * seed + c) % m;
            seed
        }
        let raffle = &mut ctx.accounts.raffle;
        let mut seed = timestamp();
        let x = rand_number(seed);
        seed = timestamp();
        let y = rand_number(seed);
        if x == y {
            raffle.winner = true;
        }
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Create<'info> {
    #[account(init, payer = user, space = 8 + 16)]
    pub raffle: Account<'info, Raffle>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Draw<'info> {
    #[account(mut, has_one = authority)]
    pub raffle: Account<'info, Raffle>,
    pub authority: Signer<'info>,
}

#[account]
pub struct Raffle {
    pub authority: Pubkey,
    pub winner: bool,
}

#[derive(Accounts)]
pub struct Sysvars<'info> {
    pub clock: Sysvar<'info, Clock>,
    pub rent: Sysvar<'info, Rent>,
    pub stake_history: Sysvar<'info, StakeHistory>,
}
