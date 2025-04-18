import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPeopleIcon],svg[charm-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="5" cy="9" r="2.25"></svg:circle><svg:circle cx="11" cy="4" r="2.25"></svg:circle><svg:path d="M7.75 9.25c0-1 .75-3 3.25-3s3.25 2 3.25 3m-12.5 5c0-1 .75-3 3.25-3s3.25 2 3.25 3"></svg:path></svg:g>`,
})
export class CharmPeopleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
