import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoonCloudIcon],svg[hugeicons-moon-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.478 12h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 12q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 12a5.5 5.5 0 0 1-1.235 3M6.52 11.023Q6.757 11 7 11c1.126 0 2.165.372 3 1"></svg:path><svg:path d="M11 5.53a4.6 4.6 0 0 0-.525-1.41A4.53 4.53 0 0 0 7.777 2a3.58 3.58 0 0 1-1.74 3.53a3.505 3.505 0 0 1-3.897-.243a4.6 4.6 0 0 0 .47 3.42A4.53 4.53 0 0 0 6.5 11"></svg:path></svg:g>`,
})
export class HugeiconsMoonCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
