import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArkSurvivalIcon],svg[arcticons-ark-survival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.053 28.76H31.21m-11.398-4h9.02M4.5 35.978h8.986m7.931-23.974L4.5 35.978m4.766-6.063l4.182 6.026m8.012-23.937h4.92m9.167 23.974h7.935M26.565 12.005L43.5 35.995M21.576 12.119l13.97 23.86m-8.982-23.974L19.804 24.7m-1.752 4.061l-4.566 7.218m25.806-5.706l-3.741 5.702"></svg:path>`,
})
export class ArcticonsArkSurvivalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
