import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonIcon],svg[carbon-carbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 30.815a1 1 0 0 1-.493-.13l-8.5-4.815A1 1 0 0 1 4 25V15a1 1 0 0 1 .507-.87l8.5-4.815a1 1 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 23 15v10a1 1 0 0 1-.507.87l-8.5 4.815a1 1 0 0 1-.493.13M6 24.417l7.5 4.249l7.5-4.249v-8.834l-7.5-4.248L6 15.583Z"></svg:path><svg:path fill="currentColor" d="M28 17h-2V7.583l-7.5-4.248l-8.007 4.535l-.986-1.74l8.5-4.815a1 1 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 28 7Z"></svg:path>`,
})
export class CarbonCarbonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
