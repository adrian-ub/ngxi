import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTornado02Icon],svg[hugeicons-tornado-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.017 6.159c1.977-1.386 8.9-2.6 9.889 0c1.48 3.89-15.029 6.222-13.845 0C5.555 3.558 10.5 2 12.973 2M18 11.193c-2.577 1.878-9.423 2.631-12 .589m8.022 9.912c-.978.188-2.014.295-3.022.306m-4-6.834c2.077.878 5.384.791 8 .115m-6.96 3.223c1.453.356 3.247.381 4.959.16" color="currentColor"></svg:path>`,
})
export class HugeiconsTornado02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
