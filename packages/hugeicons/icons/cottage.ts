import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCottageIcon],svg[hugeicons-cottage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 21h18"></svg:path><svg:circle cx="12" cy="9" r="2"></svg:circle><svg:path d="M4 21V11a8 8 0 1 1 16 0v10"></svg:path><svg:path d="M9 21v-3c0-1.823 1.06-3 3-3s3 1.177 3 3v3"></svg:path></svg:g>`,
})
export class HugeiconsCottageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
