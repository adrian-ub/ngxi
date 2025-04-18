import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCloudIcon],svg[hugeicons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.478 10h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 10q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 10a5.5 5.5 0 0 1-1.235 3M6.52 9.023Q6.757 9 7 9c1.126 0 2.165.372 3 1" color="currentColor"></svg:path>`,
})
export class HugeiconsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
