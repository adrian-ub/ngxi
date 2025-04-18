import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFaceVomitingIcon],svg[fluent-emoji-flat-face-vomiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#402A32" d="M9.447 12.106a1 1 0 0 0-.894 1.788L10.763 15l-2.21 1.105a1 1 0 0 0 .894 1.79l4-2a1 1 0 0 0 0-1.79zm13.106 0a1 1 0 0 1 .894 1.788L21.237 15l2.21 1.105a1 1 0 0 1-.894 1.79l-4-2a1 1 0 0 1 0-1.79z"></svg:path><svg:path fill="#BB1D80" d="M8 23a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#00D26A" d="M21.01 23.16c.15 2.65 2.78 4.87 6.01 4.87c1.1 0 1.98.97 1.98 1.97H3c0-1.11.87-1.97 1.98-1.97c3.33 0 6.03-2.35 6.03-5.11L11 20h10z"></svg:path><svg:path fill="#00D26A" d="M7 25.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m21.75 1a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-.75-4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFaceVomitingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
