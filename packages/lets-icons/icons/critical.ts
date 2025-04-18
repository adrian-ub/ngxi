import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCriticalIcon],svg[lets-icons-critical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M21 16a9 9 0 0 0-18 0h5.005a3.995 3.995 0 0 1 7.99 0zm-9-9v5m6.364-2.364l-3 3m-9.728-3L9 13"></svg:path>`,
})
export class LetsIconsCriticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
