import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneCleanBottleShieldIcon],svg[covid-personal-hygiene-clean-bottle-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M23 15.749a7.67 7.67 0 0 1-6 7.5a7.67 7.67 0 0 1-6-7.5V13.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5zm-5.999-.75v4.5m-2.251-2.25h4.501"></svg:path><svg:path d="M8.5 20.253H4a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h6a3 3 0 0 1 2.925 2.331M1 2.25l.622-.621A3 3 0 0 1 3.741.75h7.009M10 6.751H4v-1.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5zM6.999 3.75v-3"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneCleanBottleShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
