import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCloudServerIcon],svg[hugeicons-cloud-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.478 8h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 8q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 8a5.5 5.5 0 0 1-1.235 3M6.52 7.023Q6.757 7 7 7c1.126 0 2.165.372 3 1m4 12.75v-.25a1 1 0 0 0-1-1h-1m2 1.25V21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.25m4 0h5m-9 0v-.25a1 1 0 0 1 1-1h1m-2 1.25H5m7-1.25V17" color="currentColor"></svg:path>`,
})
export class HugeiconsCloudServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
