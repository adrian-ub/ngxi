import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTornado01Icon],svg[hugeicons-tornado-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7c0 2.21-3.582 4-8 4S4 9.21 4 7s3.582-4 8-4s8 1.79 8 4m-2 7c0 1.657-2.686 3-6 3s-6-1.343-6-3s2.686-3 6-3m4 8c0 1.105-1.79 2-4 2s-4-.895-4-2s1.79-2 4-2" color="currentColor"></svg:path>`,
})
export class HugeiconsTornado01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
