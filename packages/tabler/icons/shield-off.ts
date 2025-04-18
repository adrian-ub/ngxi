import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShieldOffIcon],svg[tabler-shield-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.67 17.667A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6c.794.036 1.583-.006 2.357-.124m3.128-.926A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3a12 12 0 0 1-1.116 9.376M3 3l18 18"></svg:path>`,
})
export class TablerShieldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
