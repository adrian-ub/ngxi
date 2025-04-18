import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSnowflakeOutlineIcon],svg[bitcoin-icons-snowflake-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4m14.5-3.514l-3.5 3.5l3.5 3.5m-13 0l3.5-3.5l-3.5-3.5m10 10l-3.5-3.5l-3.5 3.5m0-13l3.5 3.5l3.5-3.5"></svg:path>`,
})
export class BitcoinIconsSnowflakeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
