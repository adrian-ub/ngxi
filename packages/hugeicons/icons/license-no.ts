import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLicenseNoIcon],svg[hugeicons-license-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 2l20 20M11.5 7H16m0 5h-.5M8 12h4m-4 5h4M3.787 4C3 5.18 3 7 3 10.188v3.938c0 3.712 0 5.568 1.24 6.72C5.481 22 7.478 22 11.47 22h1.06c3.993 0 5.989 0 7.23-1.153q.128-.12.24-.25m.98-4.097c.02-.727.02-1.554.02-2.5v-4c0-3.771 0-5.657-1.24-6.828C18.519 2 16.522 2 12.53 2h-1.06c-2.188 0-3.777 0-4.97.193" color="currentColor"></svg:path>`,
})
export class HugeiconsLicenseNoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
