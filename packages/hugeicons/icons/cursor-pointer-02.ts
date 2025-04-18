import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorPointer02Icon],svg[hugeicons-cursor-pointer-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.051 16A7.157 7.157 0 1 1 16 7.051"></svg:path><svg:path d="M6.444 10A2.55 2.55 0 0 1 6 8.557A2.55 2.55 0 0 1 8.546 6c.54 0 1.042.169 1.454.457m-.69 2.921C10.8 7.773 22.01 11.705 22 13.14c-.01 1.628-4.378 2.128-5.588 2.468c-.728.204-.923.414-1.09 1.177c-.761 3.457-1.143 5.176-2.012 5.215c-1.387.061-5.455-11.055-4-12.622"></svg:path></svg:g>`,
})
export class HugeiconsCursorPointer02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
