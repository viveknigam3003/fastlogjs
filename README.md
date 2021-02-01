# Fastlog JS ⚡📰

## Description
⚡ Supercharged console logs for your JS apps. Inspired by [gabrielefronze/fastlog](https://github.com/gabrielefronze/fastlog).

## Usage
```js
fastlog('Just a normal log')

const level = 1;
const options = "XYZ";

fastlog(`Message ${options}`, level);
```
```shell
[LOG: 1/2/2021, 7:25:04 pm] Just a normal log
[INFO: 1/2/2021, 7:25:04 pm] Message XYZ
```

### Log Levels
Fastlog provides 4 log levels - 

|Level|INFO|Used for| Color 
|-|-|-|-
|`1` |INFO| Info from the server/app| Cyan
|`2` |WARNING | Warnings logs| Yellow |
|`3` |SUCCESS | Succes from an action | Green
|`4` |ERROR | Error messages | Red


```js

fastlog('This is an Info', 1) //INFO
fastlog('This is an Info', 2) //WARNING
fastlog('This is an Info', 3) //SUCCESS
fastlog('This is an Info', 4) //ERROR

```