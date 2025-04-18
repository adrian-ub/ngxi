import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLandSurveyingIcon],svg[icon-park-twotone-land-surveying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLandSurveying0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 26v18m0-18l12 18M24 26L12 44m12-30v6m-5 0h10"></svg:path><svg:path fill="#555" d="M10 6h26v8H10z"></svg:path><svg:path stroke-linecap="round" d="M40 8v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLandSurveying0)"></svg:path>`,
})
export class IconParkTwotoneLandSurveyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
