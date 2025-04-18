import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAgreement02Icon],svg[hugeicons-agreement-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m22 3.5l-3.41 2.233a4.2 4.2 0 0 1-2.76.66l-1.303-.143a4.2 4.2 0 0 0-3.25 1.035L8.76 9.533a2.25 2.25 0 0 0-.08 3.3c.802.787 2.067.89 2.99.242l1.665-1.168c.234-.163.526-.225.807-.17l.333.066a4.2 4.2 0 0 0 3.304-.736l.59-.435"></svg:path><svg:path d="M14.142 11.737C14.762 12.992 15.6 15.9 18 17.5c-1.167 1.333-4.4 3-8 3c-4.5 0-8-5-8-5m10-8.732c-.787-.484-2.98-1.185-5.968-1.261a2.1 2.1 0 0 1-.993-.27L2 3.5m16 14s2.5-.5 4-2"></svg:path></svg:g>`,
})
export class HugeiconsAgreement02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
