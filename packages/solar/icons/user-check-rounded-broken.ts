import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserCheckRoundedBrokenIcon],svg[solar-user-check-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M12 13c2.608 0 4.883.815 6.088 2.024m-2.504 5.413C14.536 20.794 13.31 21 12 21c-3.866 0-7-1.79-7-4c0-1.36 1.187-2.56 3-3.283"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18 18.5l1 1l2-2.5"></svg:path></svg:g>`,
})
export class SolarUserCheckRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
