import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLabelIcon],svg[icon-park-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 4H39V44L24 33.4286L9 44V4Z"></svg:path><svg:rect width="30" height="12" x="9" y="4" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkLabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
