import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLandSurveyingIcon],svg[icon-park-land-surveying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 26V44"></svg:path><svg:path stroke-linecap="round" d="M24 26L36 44"></svg:path><svg:path stroke-linecap="round" d="M24 26L12 44"></svg:path><svg:path stroke-linecap="round" d="M24 14V20"></svg:path><svg:path stroke-linecap="round" d="M19 20L29 20"></svg:path><svg:rect width="26" height="8" x="10" y="6" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M40 8V12"></svg:path></svg:g>`,
})
export class IconParkLandSurveyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
