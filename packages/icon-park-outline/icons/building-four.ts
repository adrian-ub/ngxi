import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBuildingFourIcon],svg[icon-park-outline-building-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m17 14l27 10v20H17z" clip-rule="evenodd"></svg:path><svg:path d="M17 14L4 24v20h13m18 0V32l-9-3v15m18 0H17"></svg:path></svg:g>`,
})
export class IconParkOutlineBuildingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
