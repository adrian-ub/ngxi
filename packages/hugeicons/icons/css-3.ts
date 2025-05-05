import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCss3Icon],svg[hugeicons-css-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.75 2.5h-15a1 1 0 0 0-1 1l1.858 14.396a2 2 0 0 0 1.155 1.565l3.997 1.816a2.5 2.5 0 0 0 1.92.058l4.957-1.907a2 2 0 0 0 1.266-1.61L20.75 3.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M7.5 6.5h9L8 11h8l-.5 5l-3.5 1l-3.5-1l-.2-2"></svg:path></svg:g>`,
})
export class HugeiconsCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
