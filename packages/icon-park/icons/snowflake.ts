import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSnowflakeIcon],svg[icon-park-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4V44"></svg:path><svg:path d="M6.72461 14L41.3656 34"></svg:path><svg:path d="M6.71923 33.9773L41.2814 14.0228"></svg:path><svg:path d="M12 10L15 19L6 21"></svg:path><svg:path d="M6 27L15 29L12 38"></svg:path><svg:path d="M36 10L33 19L42 21"></svg:path><svg:path d="M42 27L33 29L36 38"></svg:path><svg:path d="M18 7L24 13L30 7"></svg:path><svg:path d="M18 41L24 35L30 41"></svg:path></svg:g>`,
})
export class IconParkSnowflakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
