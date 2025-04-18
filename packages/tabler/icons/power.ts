import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPowerIcon],svg[tabler-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6a7.75 7.75 0 1 0 10 0m-5-2v8"></svg:path>`,
})
export class TablerPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
