# [@fav/type.format-date][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Converts a date to a string in various date formats.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/type.format-date
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/type.format-date/` directory manually.*


## Usage

For Node.js:

```js
var formatDate = require('@fav/type.format-date');
var formatMMDD = formatDate('MM/DD');
formatMMDD(new Date(2017, 10, 5)); // => '11/05'

var formatCustom = formatDate('YYYY/MM/DD (Week)', {
  Week: function(date) {
    return ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]
  },
});
formatCustom(new Date(2018, 4, 30)); // => '2018/05/30 (水)'
```

For Web browsers:

```html
<script src="fav.type.format-date.min.js"></script>
<script>
var formatDate = fav.type.formatDate;
var formatMMDD = formatDate('MM/DD');
formatMMDD(new Date(2017, 10, 5)); // => '11/05'
</script>
```


## API

### <u>formatDate(format [, opts]) : function</u>

Creates a date format function which convert a date to a string in the specified format.



#### Parameters:

| Parameter |  Type  | Description                            |
|-----------|:------:|----------------------------------------|
| format    | string | A date format string, which consists of the following date element fields. |

##### Date element fields:

| Character | Description                | Example                 |
|-----------|----------------------------|-------------------------|
| `'Y'*`    | Full year.                 | `'YYYY' => '2017'`      |
| `'y'*`    | Year of century (0〜±99). | `'yy' => '17'`          |
| `'M'*`    | Month (1〜12)              | `'MM' => '11'`          |
| `'Mmm'`   | Month abbreviation         | `'Mmm' => 'Nov'`        |
| `'Month'` | Month full name            | `'Month' => 'November'`   |
| `'D'*`    | Day of month (1〜31)       | `'DD' => '05'`            |
| `'H'*`    | Hours (0〜23)              | `'HH' => '14'`            |
| `'m'*`    | Minutes (0〜59)            | `'mm' => '45'`            |
| `'s'*`    | Seconds (0〜59)            | `'ss' => '06'`            |
| `'S'*`    | Hours (0〜59)              | `'SSS' => '023'`          |
| `'Www'`   | Week abbreviation          | `'Www' => 'Sun'`          |
| `'Week'`  | Week full name             | `'Week' => 'Sunday'`      |

#### Returns:

A formatted string which represents the specified date.

**Type:** string


## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017-2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type.format-date/
[npm-img]: https://img.shields.io/badge/npm-v1.0.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.format-date
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.format-date.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type.format-date
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type.format-date?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type-format-date
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type.format-date/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type.format-date?branch=master
