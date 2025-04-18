import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryAddIcon],svg[tdesign-battery-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 .5h8V3h5v20.5H3V3h5zm2 2V5H5v16.5h14V5h-5V2.5zm3 7v3h3v2h-3v3h-2v-3H8v-2h3v-3z"></svg:path>`,
})
export class TdesignBatteryAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
