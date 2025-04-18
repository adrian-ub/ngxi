import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConcentrationTrainingIcon],svg[arcticons-concentration-training-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.527 17.635c0 5.828-4.707 10.552-10.513 10.552h0C9.207 28.187 4.5 23.462 4.5 17.635c0-5.828 4.707-10.552 10.514-10.552h0c5.806 0 10.513 4.724 10.513 10.552"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24.096c0 9.29-7.504 16.821-16.76 16.821S9.98 33.386 9.98 24.095c0-9.29 7.503-16.821 16.76-16.821c9.256 0 16.76 7.531 16.76 16.821"></svg:path>`,
})
export class ArcticonsConcentrationTrainingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
