import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBatteryOutlineIcon],svg[flowbite-battery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M2.988 7.971a1 1 0 0 1 1-1h12.937a1 1 0 0 1 1 1v7.959a1 1 0 0 1-1 1H3.988a1 1 0 0 1-1-1zm17.925 4.97v-1.983a1 1 0 0 0-1-1h-.988a1 1 0 0 0-1 1v1.984a1 1 0 0 0 1 1h.988a1 1 0 0 0 1-1Z"></svg:path><svg:path d="M5.975 9.959h8.963v3.983H5.975z"></svg:path></svg:g>`,
})
export class FlowbiteBatteryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
