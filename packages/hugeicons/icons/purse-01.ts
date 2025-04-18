import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPurse01Icon],svg[hugeicons-purse-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.987 3.875c.068-.75-.095-1.875-1.23-1.875C13.337 2 9.824 7 7 7"></svg:path><svg:path d="M8.015 3.875C7.939 3.125 8.12 2 9.399 2C10.996 2 14.824 7 18 7M4 10h16"></svg:path><svg:path d="M21.863 15.002c-.448-2.065-2.39-4.504-1.69-6.62A1.055 1.055 0 0 0 19.162 7H4.83a1.05 1.05 0 0 0-1.004 1.382c.712 2.116-1.237 4.56-1.687 6.625c-.619 2.837.884 5.787 3.748 6.386c3.871.81 8.354.81 12.226 0c2.866-.598 4.368-3.55 3.751-6.39"></svg:path></svg:g>`,
})
export class HugeiconsPurse01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
