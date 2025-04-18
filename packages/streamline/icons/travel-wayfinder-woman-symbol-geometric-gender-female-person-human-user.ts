import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderWomanSymbolGeometricGenderFemalePersonHumanUserIcon],svg[streamline-travel-wayfinder-woman-symbol-geometric-gender-female-person-human-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="4" r="3.5"></svg:circle><svg:path d="M7 7.5v6M5 11h4"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderWomanSymbolGeometricGenderFemalePersonHumanUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
