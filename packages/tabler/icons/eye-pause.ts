import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyePauseIcon],svg[tabler-eye-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M13.022 17.945A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6q-.293.487-.596.935M17 17v5m4-5v5"></svg:path></svg:g>`,
})
export class TablerEyePauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
