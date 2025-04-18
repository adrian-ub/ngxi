import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryAddFilledIcon],svg[tdesign-battery-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 .5H8V3H3v20.5h18V3h-5zm0 14h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class TdesignBatteryAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
