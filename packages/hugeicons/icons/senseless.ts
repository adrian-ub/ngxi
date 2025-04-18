import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSenselessIcon],svg[hugeicons-senseless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.003 9.019s.25-.623-.38-.928c-1.12-.543-2.586 1.471-.757 2.582C8.758 11.823 10 9.697 10 8.091m5.997 1.89s-.25.623.38.928c1.12.543 2.587-1.471.757-2.582C15.242 7.177 14 9.303 14 10.909m2 5.691l-.27-.2c-.718-.533-1.563-.533-2.28 0l-.27.2c-.718.533-1.564.533-2.282 0l-.27-.2c-.717-.533-1.563-.533-2.28 0L8 16.658"></svg:path></svg:g>`,
})
export class HugeiconsSenselessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
