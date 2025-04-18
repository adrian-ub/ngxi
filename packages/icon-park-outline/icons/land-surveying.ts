import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLandSurveyingIcon],svg[icon-park-outline-land-surveying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 26v18m0-18l12 18M24 26L12 44m12-30v6m-5 0h10"></svg:path><svg:path d="M10 6h26v8H10z"></svg:path><svg:path stroke-linecap="round" d="M40 8v4"></svg:path></svg:g>`,
})
export class IconParkOutlineLandSurveyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
