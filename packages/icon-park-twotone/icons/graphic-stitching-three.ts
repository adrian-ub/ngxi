import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGraphicStitchingThreeIcon],svg[icon-park-twotone-graphic-stitching-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGraphicStitchingThree0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0 30a5 5 0 1 0 0-10a5 5 0 0 0 0 10M14 19H4v10h10zm30 0H34v10h10z"></svg:path><svg:path d="M19 9H9v10m10 20H9V29M29 9h11v10M29 39h10V29"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGraphicStitchingThree0)"></svg:path>`,
})
export class IconParkTwotoneGraphicStitchingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
