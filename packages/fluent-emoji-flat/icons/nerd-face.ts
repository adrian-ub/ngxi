import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatNerdFaceIcon],svg[fluent-emoji-flat-nerd-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#BB1D80" d="M23 20c0 3.87-3.13 7-7 7s-7-3.13-7-7h4.018l2.98 1l2.979-1z"></svg:path><svg:path fill="#fff" d="M13 20h6v.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm1.5-6.5a5 5 0 1 1-10 0a5 5 0 0 1 10 0m13 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path fill="#402A32" d="M8 13.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m11 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill="#402A32" d="M9.5 8a5.5 5.5 0 0 1 5.293 4h2.414a5.502 5.502 0 0 1 10.586 0h2.12c.598 0 1.087.45 1.087 1s-.49 1-1.087 1h-1.935a5.5 5.5 0 0 1-10.956 0h-2.044a5.5 5.5 0 0 1-10.956 0H2a1 1 0 1 1 0-2h2.207A5.5 5.5 0 0 1 9.5 8M5 13.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m13.007 0a4.493 4.493 0 1 0 8.986 0a4.493 4.493 0 0 0-8.986 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatNerdFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
