import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPlaneLandIcon],svg[bxs-plane-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.842 15.296a1.61 1.61 0 0 0 1.892-1.189v-.001a1.61 1.61 0 0 0-1.177-1.949l-4.576-1.133L9.825 4.21l-2.224-.225l2.931 6.589l-4.449-.449l-2.312-3.829l-1.38.31l1.24 5.52zM3 18h18v2H3z"></svg:path>`,
})
export class BxsPlaneLandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
