import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandWashIcon],svg[covid-personal-hygiene-hand-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m1.1 19.616l3.049 2.44a5.45 5.45 0 0 0 3.404 1.194h6.264a1.817 1.817 0 0 0 1.817-1.817v0a1.82 1.82 0 0 0-1.817-1.817H9.124"></svg:path><svg:path d="M1.264 14.166H4.9c1.077 0 2.13.319 3.025.917L10 16.466a1.7 1.7 0 0 1 .539 2.395v0a1.7 1.7 0 0 1-2.17.576L5.641 17.8M21.863 5.941a2.6 2.6 0 0 1-5.191 0c0-1.947 2.595-5.191 2.595-5.191s2.596 3.244 2.596 5.191M22.9 18.119a1.917 1.917 0 0 0-1.916-1.919c-.048 0-.093.01-.14.014a3.816 3.816 0 0 0-6.756-3.256a2.85 2.85 0 0 0-3.645.141"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneHandWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
