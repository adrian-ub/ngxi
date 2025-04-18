import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalLinearIcon],svg[solar-flip-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 18.114V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114Zm20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832Z"></svg:path><svg:path stroke-linecap="round" d="M12 14v-4m0-4V2m0 20v-4"></svg:path></svg:g>`,
})
export class SolarFlipHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
