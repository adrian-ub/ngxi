import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDressingTable03Icon],svg[hugeicons-dressing-table-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 15c0-.943 0-1.414.293-1.707S3.057 13 4 13h16c.943 0 1.414 0 1.707.293S22 14.057 22 15v2c0 .943 0 1.414-.293 1.707S20.943 19 20 19H4c-.943 0-1.414 0-1.707-.293S2 17.943 2 17zm9 1h2m6.5 3c-.8 1.6 0 2.667.5 3M4.5 19c.8 1.6 0 2.667-.5 3m0-9V2m16 11V2M4 3.5h4.086c.196 0 .294 0 .378-.031s.17-.105.34-.251c1.887-1.624 4.505-1.624 6.392 0c.17.146.255.22.34.25c.084.032.182.032.378.032H20M9 7l1-1m0 3.5l2-2" color="currentColor"></svg:path>`,
})
export class HugeiconsDressingTable03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
