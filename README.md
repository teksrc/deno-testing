# 🦕 Deno 2 Testing

`deno test --allow-read main_test.ts`

## Fundamentals:

https://docs.deno.com/runtime/fundamentals/testing/

Standard lib:
https://jsr.io/@std

If run without a file name or directory name, this subcommand will automatically find and execute all tests in the current directory (recursively) that match the glob {_\_,_.,}test.{ts, tsx, mts, js, mjs, jsx}.

```
# Run all tests in the current directory and all sub-directories
deno test

# Run all tests in the util directory
deno test util/

# Run just my_test.ts
deno test my_test.ts

# Run test modules in parallel
deno test --parallel

# Pass additional arguments to the test file that are visible in `Deno.args`
deno test my_test.ts -- -e --foo --bar

# Provide permission for deno to read from the filesystem, which is necessary
# for the final test above to pass
deno test --allow-read my_test.ts
```

Filtering by string

`deno test --filter "my" tests/`

Filtering by pattern
`deno test --filter "/test-*\d/" tests/`

This command will run `test-1` and `test-2` because they match the pattern `test-*` followed by a digit.
