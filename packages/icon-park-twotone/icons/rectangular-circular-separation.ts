import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRectangularCircularSeparationIcon],svg[icon-park-twotone-rectangular-circular-separation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRectangularCircularSeparation0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M12 19a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm30 12H32v10h10z"></svg:path><svg:path stroke-linecap="round" d="M4 25h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRectangularCircularSeparation0)"></svg:path>`,
})
export class IconParkTwotoneRectangularCircularSeparationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
