# Anchor

Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools.

## Getting Started

To install Anchor, use the following command:

```bash
npm install -g @project-serum/anchor
```

## Writing Programs

Anchor provides a highly expressive, TypeScript-like syntax for writing on-chain programs. 

```rust
use anchor_lang::prelude::*;

#[program]
pub mod my_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
```

## Testing

Anchor provides a testing framework out of the box. 

```javascript
const anchor = require('@project-serum/anchor');
const { assert } = require('@project-serum/anchor');

describe('myProgram', () => {
  // Use the generated client to execute instructions against the target
  // program.
  const program = anchor.workspace.MyProgram;

  it('Initializes the program', async () => {
    // Execute the RPC.
    await program.rpc.initialize({
      accounts: {},
    });

    // Success if the program didn't error.
    assert.ok(true);
  });
});
```

For more information, visit the [official Anchor documentation](https://project-serum.github.io/anchor/).