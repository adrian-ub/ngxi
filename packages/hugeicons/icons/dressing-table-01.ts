import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDressingTable01Icon],svg[hugeicons-dressing-table-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 6l1-1m0 3l2-2m-7 8V8a6 6 0 1 1 12 0v6M5 14v8m14-8v8M4 14h16M5 19h14m-7.5-2.5h1" color="currentColor"></svg:path>`,
})
export class HugeiconsDressingTable01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
