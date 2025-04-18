import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAg4x3Icon],svg[flag-ag-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagAg4x30"><svg:path fill-opacity=".7" d="M-79.7 0H603v512H-79.7z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagAg4x30)" transform="translate(74.7)scale(.9375)"><svg:path fill="#fff" d="M-79.7 0H603v512H-79.7z"></svg:path><svg:path fill="#000001" d="M-79.6 0H603v204.8H-79.7z"></svg:path><svg:path fill="#0072c6" d="M21.3 203.2h480v112h-480z"></svg:path><svg:path fill="#ce1126" d="M603 .1V512H261.6L603 0zM-79.7.1V512h341.3L-79.7 0z"></svg:path><svg:path fill="#fcd116" d="M440.4 203.3L364 184l64.9-49l-79.7 11.4l41-69.5l-70.7 41L332.3 37l-47.9 63.8l-19.3-74l-21.7 76.3l-47.8-65l13.7 83.2L138.5 78l41 69.5l-77.4-12.5l63.8 47.8L86 203.3z"></svg:path></svg:g>`,
})
export class FlagAg4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
