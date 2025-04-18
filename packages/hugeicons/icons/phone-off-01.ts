import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPhoneOff01Icon],svg[hugeicons-phone-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 2l.089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5s1.81-.01 2.225-.378c.397-.352.493-.93.686-2.088L15 2m-4 17h2M2 2l20 20m-3.016-3.004c-.18 1.92-1.567 3.004-3.5 3.004H8.492a3.5 3.5 0 0 1-3.5-3.5l.1-13.014"></svg:path><svg:path d="M7.14 2.27A3.5 3.5 0 0 1 8.493 2h6.991a3.5 3.5 0 0 1 3.5 3.5v9.505"></svg:path></svg:g>`,
})
export class HugeiconsPhoneOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
