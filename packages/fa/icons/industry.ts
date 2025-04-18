import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faIndustryIcon],svg[fa-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 0q26 0 45 19t19 45v891l536-429q17-14 40-14q26 0 45 19t19 45v379l536-429q17-14 40-14q26 0 45 19t19 45v1152q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0z"></svg:path>`,
})
export class FaIndustryIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
