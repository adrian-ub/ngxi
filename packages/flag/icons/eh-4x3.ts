import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEh4x3Icon],svg[flag-eh-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagEh4x30"><svg:path fill-opacity=".7" d="M-158.7 0H524v512h-682.7z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagEh4x30)" transform="translate(148.8)scale(.94)"><svg:path fill="#000001" d="M-158.3 0h680.9v255.3h-680.9z"></svg:path><svg:path fill="#007a3d" d="M-158.3 255.3h680.9v255.3h-680.9z"></svg:path><svg:path fill="#fff" d="M-158.3 148.9h680.9v212.8h-680.9z"></svg:path><svg:path fill="#c4111b" d="m-158.3 0l340.4 255.3l-340.4 255.3Z"></svg:path><svg:circle cx="352.3" cy="255.3" r="68.1" fill="#c4111b"></svg:circle><svg:circle cx="377.9" cy="255.3" r="68.1" fill="#fff"></svg:circle><svg:path fill="#c4111b" d="m334 296.5l29.1-20.7l28.8 21l-10.8-34l29-20.9l-35.7-.2l-11-34l-11.2 33.9l-35.7-.2l28.7 21.2l-11.1 34z"></svg:path></svg:g>`,
})
export class FlagEh4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
