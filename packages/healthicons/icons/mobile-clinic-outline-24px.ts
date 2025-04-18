import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMobileClinicOutline24pxIcon],svg[healthicons-mobile-clinic-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 16v-2h10v2zm10-4H4V5h10zm2 4v-2h4v2zm0-4h3.382l-1-2H16zm-2 6H8.95q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5H2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4h2.382a2 2 0 0 1 1.789 1.106l1.618 3.236c.139.277.211.584.211.894V18h-2.05q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5zm3.5 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-11 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M8 11V9.5H6.5v-2H8V6h2v1.5h1.5v2H10V11z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMobileClinicOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
