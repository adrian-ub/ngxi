import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFullScreenTwoIcon],svg[icon-park-outline-full-screen-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 6h12v12M18 6H6v12m24 24h12V30M18 42H6V30M42 6L29 19M19 29L6 42"></svg:path>`,
})
export class IconParkOutlineFullScreenTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
