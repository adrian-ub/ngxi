import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimExclamationTriangleIcon],svg[uim-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22" opacity=".5"></svg:path><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"></svg:path>`,
})
export class UimExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
