import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLOutlineIcon],svg[healthicons-l-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 12a3 3 0 1 1 6 0v21h9a3 3 0 1 1 0 6H18a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H20a1 1 0 0 1-1-1V12a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsLOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
