import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDiamondThreeIcon],svg[icon-park-solid-diamond-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="M5.414 22.586L22.586 5.414a2 2 0 0 1 2.828 0l17.172 17.172a2 2 0 0 1 0 2.828L25.414 42.586a2 2 0 0 1-2.828 0L5.414 25.414a2 2 0 0 1 0-2.828Z"></svg:path>`,
})
export class IconParkSolidDiamondThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
