import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCashRegisterOutlineIcon],svg[flowbite-cash-register-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 18h14M5 18v3h14v-3M5 18l1-9h12l1 9M16 6v3m-4-3v3m-2-6h8v3h-8zm-1 9h.01v.01H9zm3 0h.01v.01H12zm3 0h.01v.01H15zm-6 3h.01v.01H9zm3 0h.01v.01H12zm3 0h.01v.01H15z"></svg:path>`,
})
export class FlowbiteCashRegisterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
