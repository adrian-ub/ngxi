import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWaterLevelIcon],svg[icon-park-outline-water-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44c8.284 0 15-6.716 15-15C39 15 24 4 24 4S9 15 9 29c0 8.284 6.716 15 15 15" clip-rule="evenodd"></svg:path><svg:path d="M9 29c0 8.284 6.716 15 15 15s15-6.716 15-15c0 0-9 3-15 0S9 29 9 29Z"></svg:path></svg:g>`,
})
export class IconParkOutlineWaterLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
