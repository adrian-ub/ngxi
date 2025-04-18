import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRectangularCircularConnectionIcon],svg[icon-park-outline-rectangular-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 19a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm5 12H7v10h10z"></svg:path><svg:path stroke-linecap="round" d="M25.68 13H42v23H25"></svg:path></svg:g>`,
})
export class IconParkOutlineRectangularCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
