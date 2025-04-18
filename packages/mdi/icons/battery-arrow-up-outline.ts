import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryArrowUpOutlineIcon],svg[mdi-battery-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2h6v2h1.67C17.4 4 18 4.6 18 5.33V12c-.7 0-1.37.13-2 .35V6H8v14h4.35c.26.75.65 1.42 1.19 2m7.4-4.5l-3-3l-3 3h2v4h2v-4z"></svg:path>`,
})
export class MdiBatteryArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
