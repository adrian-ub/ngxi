import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryFullIcon],svg[ix-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128v85.333h42.666v85.334h-42.666V384h-384V128zM384 170.667H85.333v170.666H384zm-42.667 42.666v85.334H128v-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
