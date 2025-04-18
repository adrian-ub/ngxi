import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAnchorTwoIcon],svg[icon-park-solid-anchor-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 24H4c0 11.046 8.954 20 20 20s20-8.954 20-20h-6M24 44V14"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSolidAnchorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
