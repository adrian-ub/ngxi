import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSwitchContrastIcon],svg[icon-park-outline-switch-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 10h10c1.886 0 2.828 0 3.414.586S44 12.114 44 14v20c0 1.886 0 2.828-.586 3.414S41.886 38 40 38H30M18 10H8c-1.886 0-2.828 0-3.414.586S4 12.114 4 14v20c0 1.886 0 2.828.586 3.414S6.114 38 8 38h10m6-32v36"></svg:path>`,
})
export class IconParkOutlineSwitchContrastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
