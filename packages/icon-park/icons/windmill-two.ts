import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWindmillTwoIcon],svg[icon-park-windmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4V24Z"></svg:path><svg:path d="M24 24C24 29.5228 28.4772 34 34 34C39.5228 34 44 29.5228 44 24H24Z"></svg:path><svg:path d="M24 24C24 18.4772 19.5228 14 14 14C8.47715 14 4 18.4772 4 24H24Z"></svg:path><svg:path d="M24 24C18.4772 24 14 28.4772 14 34C14 39.5228 18.4772 44 24 44V24Z"></svg:path></svg:g>`,
})
export class IconParkWindmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
