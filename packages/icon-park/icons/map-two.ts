import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMapTwoIcon],svg[icon-park-map-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 10H4V40H44V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10 16L38 34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 16L24 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 16L10 34"></svg:path></svg:g>`,
})
export class IconParkMapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
