import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicStitchingThreeIcon],svg[icon-park-graphic-stitching-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path fill="#2F88FF" d="M24 44C26.7614 44 29 41.7614 29 39C29 36.2386 26.7614 34 24 34C21.2386 34 19 36.2386 19 39C19 41.7614 21.2386 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M14 19H4V29H14V19Z"></svg:path><svg:path fill="#2F88FF" d="M44 19H34V29H44V19Z"></svg:path><svg:path d="M19 9H9V19"></svg:path><svg:path d="M19 39H9V29"></svg:path><svg:path d="M29 9H40V19"></svg:path><svg:path d="M29 39H39V29"></svg:path></svg:g>`,
})
export class IconParkGraphicStitchingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
