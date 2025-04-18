import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoLightIcon],svg[ph-medium-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 66a62 62 0 1 0 62 62a62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50M184 66c-17.1 0-30 26.65-30 62s12.9 62 30 62s30-26.65 30-62s-12.9-62-30-62m0 112c-7.34 0-18-19.48-18-50s10.66-50 18-50s18 19.48 18 50s-10.66 50-18 50m62-106v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhMediumLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
