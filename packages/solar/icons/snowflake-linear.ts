import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeLinearIcon],svg[solar-snowflake-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v16m0 4v-4m0 0l3 3m-3-3l-3 3m6-18l-3 3l-3-3M3.34 7l3.464 2m0 0l10.392 6M6.804 9L5.706 4.902M6.804 9l-4.098 1.098M17.196 15l3.464 2m-3.464-2l4.098-1.098M17.197 15l1.098 4.099M20.66 7l-3.464 2m0 0L6.804 15m10.392-6l1.098-4.098M17.196 9l4.098 1.098M6.804 15L3.34 17m3.464-2l-4.098-1.098M6.804 15l-1.098 4.1"></svg:path>`,
})
export class SolarSnowflakeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
