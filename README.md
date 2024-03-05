# dnd-roller

A simple dice roller for ttrpgs.

## Usage

Best when used with `npx`

```shell
npx dnd-roller roll "1d20 + 2"
```

If you need to get help

```shell
npx dnd-roller help
```

You can also define aliases for common rolls. For instance, if you find yourself making a reflex save often, you can alias that

```shell
npx dnd-roller alias reflex 1d20+8
```

And then roll that again later

```shell
npx dnd-roller roll reflex
```

By default, aliases are stored in `~/.dnd-roller/config.json`, but that can be changed with a flag

```shell
npx dnd-roller --config=~/.my-directory/config.json roll reflex
```
