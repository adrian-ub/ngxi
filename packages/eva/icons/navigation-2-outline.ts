import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaNavigation2OutlineIcon],svg[eva-navigation-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.67 22h-.06a1 1 0 0 1-.92-.8L11 13l-8.2-1.69a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68m-6.8-11.9l5.19 1.06a1 1 0 0 1 .79.78l1.05 5.19l3.52-10.55Z"></svg:path>`,
})
export class EvaNavigation2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
