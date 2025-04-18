import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagNr4x3Icon],svg[flag-nr-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagNr4x30"><svg:path fill-opacity=".7" d="M-54.7 0H628v512H-54.7z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagNr4x30)" transform="translate(51.3)scale(.9375)"><svg:path fill="#002170" d="M-140 0H884v512H-140z"></svg:path><svg:path fill="#ffb20d" d="M-140 234.1H884V278H-140z"></svg:path><svg:path fill="#fff" d="m161.8 438l-33-33l-10.5 45.4l-12-45l-31.9 34l12.1-45L42 407.9l33-33l-45.4-10.6l45-12l-34-31.8l45 12L72 288l33 33l10.6-45.4l12 45l31.8-34l-12 45l44.5-13.5l-33 33l45.4 10.5l-45 12l34 32l-45-12.2z"></svg:path></svg:g>`,
})
export class FlagNr4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
