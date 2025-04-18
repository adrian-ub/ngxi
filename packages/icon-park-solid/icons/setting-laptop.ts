import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingLaptopIcon],svg[icon-park-solid-setting-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 9H11a3 3 0 0 0-3 3v21h32v-7"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:circle cx="35" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 21v-4m0-6V7m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2"></svg:path></svg:g>`,
})
export class IconParkSolidSettingLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
