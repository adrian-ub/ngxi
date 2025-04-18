import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSnowflakeIcon],svg[charm-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 7.75h-12m6-6v12m-2.5-1l2.5-2.5l2.5 2.5m-7.5-7.5l2.5 2.5l-2.5 2.5m7.5-7.5l-2.5 2.5l-2.5-2.5m7.5 7.5l-2.5-2.5l2.5-2.5"></svg:path>`,
})
export class CharmSnowflakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
