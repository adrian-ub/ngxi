import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTaurusIcon],svg[icon-park-solid-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="31" r="9" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" d="M44 8c0 7.732-8.954 14-20 14S4 15.732 4 8"></svg:path></svg:g>`,
})
export class IconParkSolidTaurusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
