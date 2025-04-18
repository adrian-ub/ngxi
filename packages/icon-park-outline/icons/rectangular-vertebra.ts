import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRectangularVertebraIcon],svg[icon-park-outline-rectangular-vertebra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m12 9l12-5l12 5l8 29l-20 6l-20-6zm12 35V14m12-5l-12 5M12 9l12 5M5 38l19-6m20 6l-20-6"></svg:path>`,
})
export class IconParkOutlineRectangularVertebraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
