use anchor_lang::prelude::*;

declare_id!("3QeRf38fdHBbaXqS87aMJjJtvRGzCvHbcXcHrmncMxpK");

#[program]
pub mod saffle {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
