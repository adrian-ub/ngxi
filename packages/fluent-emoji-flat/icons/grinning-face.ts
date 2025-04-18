import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatGrinningFaceIcon],svg[fluent-emoji-flat-grinning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M15 10.5a4.5 4.5 0 0 1-1.694 3.518c-.803-.27-1.83-.518-2.806-.518c-.977 0-2.003.248-2.806.518A4.5 4.5 0 1 1 15 10.5m11 0a4.5 4.5 0 0 1-1.694 3.518c-.803-.27-1.83-.518-2.806-.518c-.977 0-2.003.248-2.806.518A4.5 4.5 0 1 1 26 10.5"></svg:path><svg:path fill="#402A32" d="M11 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill="#BB1D80" d="M16 25c-9 0-9-9-9-9h18s0 9-9 9"></svg:path><svg:path fill="#fff" d="M8 16.5V16h16v.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatGrinningFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
