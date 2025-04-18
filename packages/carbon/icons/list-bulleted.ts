import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonListBulletedIcon],svg[carbon-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="9" r="3" fill="currentColor"></svg:circle><svg:circle cx="7" cy="23" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 22h14v2H16zm0-14h14v2H16z"></svg:path>`,
})
export class CarbonListBulletedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
