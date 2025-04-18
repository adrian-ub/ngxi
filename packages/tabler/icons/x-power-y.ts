import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerXPowerYIcon],svg[tabler-x-power-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 3l3 5.063M5 12l6 6m-6 0l6-6m10-9l-4.8 9"></svg:path>`,
})
export class TablerXPowerYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
