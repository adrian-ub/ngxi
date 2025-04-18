import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBigClockIcon],svg[icon-park-big-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 4C12.9543 4 4 12.8648 4 23.8V44H44V23.8C44 12.8648 35.0457 4 24 4Z"></svg:path><svg:circle cx="24" cy="24" r="12" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M24 18V24L28 28"></svg:path></svg:g>`,
})
export class IconParkBigClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
