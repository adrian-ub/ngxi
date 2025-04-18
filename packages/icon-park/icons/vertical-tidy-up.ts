import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticalTidyUpIcon],svg[icon-park-vertical-tidy-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="6" x="8" y="7"></svg:rect><svg:rect width="32" height="6" x="8" y="21"></svg:rect><svg:rect width="32" height="6" x="8" y="35"></svg:rect></svg:g>`,
})
export class IconParkVerticalTidyUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
