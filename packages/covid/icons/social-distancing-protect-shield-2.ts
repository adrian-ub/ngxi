import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingProtectShield2Icon],svg[covid-social-distancing-protect-shield-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 9.25v4m22.5-4v4m-22.5-2h5.5m0-4.013v4.49a7.02 7.02 0 0 0 4.5 6.554l.614.236c.409.157.861.157 1.27 0l.614-.236a7.02 7.02 0 0 0 4.5-6.554v-4.49a.88.88 0 0 0-.512-.8A12.8 12.8 0 0 0 12 5.365a12.8 12.8 0 0 0-5.238 1.068a.88.88 0 0 0-.512.804m11.5 4.013h5.5"></svg:path>`,
})
export class CovidSocialDistancingProtectShield2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
