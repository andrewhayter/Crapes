# Anchor

Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools.

## Features

- **IDL Generation**: Anchor will automatically generate an IDL for your program, providing a single source of truth defining the interface to your program.

- **Clients**: Anchor generates clients in TypeScript, JavaScript, and Rust, providing an easy way to interact with your program.

- **Easy Testing**: Anchor provides an idiomatic testing framework for writing on-chain tests against your program.

## Getting Started

To install Anchor, use the following command:

```bash
npm install -g @project-serum/anchor
```

To create a new Anchor project, use the following command:

```bash
anchor init <project-name>
```

This will create a new project with the following layout:

```bash
<project-name>/
├── src/
│   ├── lib.rs
├── tests/
│   ├── basic.rs
├── programs/
│   ├── <project-name>/src/lib.rs
│   ├── <project-name>/Cargo.toml
├── target/
├── Cargo.toml
└── Anchor.toml
```

## Writing Programs

Anchor programs are written in Rust. Here's a simple example of an Anchor program:

```rust
use anchor_lang::prelude::*;

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let message = &mut ctx.accounts.message;
        message.authority = *ctx.accounts.authority.key;
        message.text = "Hello, world!".to_string();
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = authority, space = 8 + 48)]
    pub message: ProgramAccount<'info, Message>,
    #[account(signer)]
    pub authority: AccountInfo<'info>,
}

#[account]
pub struct Message {
    pub authority: Pubkey,
    pub text: String,
}
```

This program defines a single `initialize` instruction that creates a new account with the text "Hello, world!".

## Conclusion

Anchor is a powerful tool for developing on Solana. With its features and easy-to-use interface, it's a great choice for any developer looking to build on Solana.