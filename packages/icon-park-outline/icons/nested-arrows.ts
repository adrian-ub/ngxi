import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNestedArrowsIcon],svg[icon-park-outline-nested-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 17V4H4v26h13"></svg:path><svg:path d="M43 43V17H17v26zM33 30H17m16 0l-5-5zm0 0l-5 5zM17 17v26"></svg:path></svg:g>`,
})
export class IconParkOutlineNestedArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
