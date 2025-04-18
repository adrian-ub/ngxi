import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserBlockRoundedBrokenIcon],svg[solar-user-block-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="m19.95 16.05l-3.9 3.9"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M13 20.96q-.49.04-1 .04c-3.866 0-7-1.79-7-4c0-.345.077-.68.22-1m9.28-2.737c-.776-.17-1.62-.263-2.5-.263c-1.074 0-2.09.138-3 .385"></svg:path></svg:g>`,
})
export class SolarUserBlockRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
