import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRidemoviIcon],svg[arcticons-ridemovi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.408 28.613a7.97 7.97 0 1 1-7.928-7.271m7.787 0c1.904 0 7.322 2.167 7.322 8.568a7.97 7.97 0 1 0 3.99-7.586l-6.644-11.605h-4.526m-.142 14.208q3.17.527 3.889 3.575"></svg:path>`,
})
export class ArcticonsRidemoviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
