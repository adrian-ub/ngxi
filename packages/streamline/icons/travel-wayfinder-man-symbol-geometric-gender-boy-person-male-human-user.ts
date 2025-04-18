import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderManSymbolGeometricGenderBoyPersonMaleHumanUserIcon],svg[streamline-travel-wayfinder-man-symbol-geometric-gender-boy-person-male-human-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="4.5" cy="9.5" r="4"></svg:circle><svg:path d="M9 .5h4.5V5M7.33 6.67L13.5.5"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderManSymbolGeometricGenderBoyPersonMaleHumanUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
