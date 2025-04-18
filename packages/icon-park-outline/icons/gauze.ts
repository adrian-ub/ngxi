import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGauzeIcon],svg[icon-park-outline-gauze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="26" cy="24" r="17"></svg:circle><svg:circle cx="26" cy="24" r="7"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 41h21"></svg:path></svg:g>`,
})
export class IconParkOutlineGauzeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
