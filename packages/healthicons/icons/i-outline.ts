import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIOutlineIcon],svg[healthicons-i-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6h-5v18h5a3 3 0 1 1 0 6H16a3 3 0 1 1 0-6h5V15h-5a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h7v22h-7a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-7V13h7a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsIOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
