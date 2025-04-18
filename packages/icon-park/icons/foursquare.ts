import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFoursquareIcon],svg[icon-park-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 4H14V44L24 26H32L38 4Z"></svg:path><svg:path stroke="#fff" d="M35 15H25"></svg:path><svg:path stroke="#000" d="M36.636 9L33.3633 21"></svg:path></svg:g>`,
})
export class IconParkFoursquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
