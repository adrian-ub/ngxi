import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRemixiconLineIcon],svg[ri-remixicon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.365 6l8.784 9.663l.72-.283c1.685-.661 2.864-2.156 3.092-3.896q-.23.016-.46.016A6.5 6.5 0 0 1 12.077 6zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947c0 2.891-1.822 5.365-4.4 6.377L20 21H3V4h11.111A4.5 4.5 0 0 0 14 5m4.5 2.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M5 7.47V19h10.48z"></svg:path>`,
})
export class RiRemixiconLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
