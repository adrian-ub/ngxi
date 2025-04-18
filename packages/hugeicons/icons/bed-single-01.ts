import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBedSingle01Icon],svg[hugeicons-bed-single-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 17.5H2M22 21v-5c0-1.886 0-2.828-.586-3.414S19.886 12 18 12H6c-1.886 0-2.828 0-3.414.586S2 14.114 2 16v5m14-9v-1.382c0-.508-.091-.677-.56-.877C14.463 9.324 13.278 9 12 9s-2.463.324-3.44.74c-.468.2-.56.37-.56.878V12"></svg:path><svg:path d="M20 12V7.36c0-.691 0-1.037-.17-1.363c-.172-.327-.415-.496-.902-.834A12.1 12.1 0 0 0 12 3c-2.577 0-4.966.8-6.928 2.163c-.487.338-.73.507-.901.834S4 6.669 4 7.36V12"></svg:path></svg:g>`,
})
export class HugeiconsBedSingle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
