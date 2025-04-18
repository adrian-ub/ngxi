import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWindOffIcon],svg[tabler-wind-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0-2.34-3.24M3 12h9m4 0h2.5a2.5 2.5 0 0 1 1.801 4.282M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24M3 3l18 18"></svg:path>`,
})
export class TablerWindOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
