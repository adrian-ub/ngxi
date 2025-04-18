import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWavesIcon],svg[icon-park-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 23.3548H11L17.8889 4L28.8889 44L37 23.3548H46"></svg:path>`,
})
export class IconParkWavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
