import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingProtectShield1Icon],svg[covid-social-distancing-protect-shield-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12.85a1.95 1.95 0 1 0 0-3.9a1.95 1.95 0 0 0 0 3.9m1.3 10.4l.65-3.9h1.3V17.4a3.25 3.25 0 0 0-6.5 0v1.95h1.3l.65 3.9zM20 12.85a1.95 1.95 0 1 0 0-3.9a1.95 1.95 0 0 0 0 3.9m-1.3 10.4l-.65-3.9h-1.3V17.4a3.25 3.25 0 0 1 6.5 0v1.95h-1.3l-.65 3.9zM4 4.75h4.65M4 5.75v-2m16 1h-4.651m4.651 1v-2m-8-3a6.8 6.8 0 0 1-3.045.975a.5.5 0 0 0-.455.5v1.22A5.78 5.78 0 0 0 12 8.75a5.78 5.78 0 0 0 3.5-5.308v-1.22a.5.5 0 0 0-.455-.5A6.8 6.8 0 0 1 12 .75"></svg:path>`,
})
export class CovidSocialDistancingProtectShield1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
