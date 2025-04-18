import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPanoramaHorizontalIcon],svg[icon-park-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 11C4 11 13 15 24 15C35 15 44 11 44 11V37C44 37 35 33 24 33C13 33 4 37 4 37V11Z"></svg:path>`,
})
export class IconParkPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
