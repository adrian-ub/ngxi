import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riServiceBellLineIcon],svg[ri-service-bell-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9v2h2v1.05c-5.053.5-9 4.764-9 9.95v1h20v-1c0-5.185-3.947-9.449-9-9.95V5h2zm-3 5a8 8 0 0 1 7.938 7H4.062A8 8 0 0 1 12 8m11 12v-2H1v2z"></svg:path>`,
})
export class RiServiceBellLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
