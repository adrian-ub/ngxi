import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCriticalLightIcon],svg[lets-icons-critical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M21 16a9 9 0 0 0-18 0h5.005a3.995 3.995 0 0 1 7.99 0zm-9-9v5m6.364-2.364L15 13M5.636 9.636L9 13"></svg:path>`,
})
export class LetsIconsCriticalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
