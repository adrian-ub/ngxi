import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDashboard1Icon],svg[tdesign-dashboard-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v7H2zm2 2v3h5V4zm9-2h9v11h-9zm2 2v7h5V4zM2 11h9v11H2zm2 2v7h5v-7zm9 2h9v7h-9zm2 2v3h5v-3z"></svg:path>`,
})
export class TdesignDashboard1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
