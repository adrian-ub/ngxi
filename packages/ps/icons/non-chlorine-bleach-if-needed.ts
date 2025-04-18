import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psNonChlorineBleachIfNeededIcon],svg[ps-non-chlorine-bleach-if-needed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M473 373q7-11 0-21L259 11q-6-10-18-10t-18 10L10 352q-9 10 0 21q6 11 17 11h426q12 0 20-11M345 230l-73 111h-79l111-175zM240 62l41 64l-137 215H65zm83 279l47-72l45 72z"></svg:path>`,
})
export class PsNonChlorineBleachIfNeededIcon {
  readonly viewBox = input("0 0 480 448")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
