import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGauzeIcon],svg[icon-park-gauze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="26" cy="24" r="17" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="26" cy="24" r="7" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5 41L26 41"></svg:path></svg:g>`,
})
export class IconParkGauzeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
