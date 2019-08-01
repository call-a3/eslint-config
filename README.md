# @call-a3/eslint-config

This is my shared eslint config.
It basically combines the prettier and standard plugins to have best-of-both rules and functionality.
I like the validation rules that standard provides (and the avoidance of bike-shedding over them),
but I prefer the formatting that prettier offers, so that's why I combine the two.

Use it like this:
```json
{
    "extends": "@call-a3"
}
```

Or just use my CLI wrapper for this config: [@call-a3/standard](https://github.com/call-a3/standard)
