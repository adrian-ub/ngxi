import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCosine01Icon],svg[hugeicons-cosine-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 20.729c-4 1.936-5.412-7.074-5.669-8.684C15.467 6.638 14.121 3 12 3c-2.12 0-3.467 3.638-4.331 9.045C7.412 13.655 6 22.665 2 20.73M2 12h2.5m15 0H22m-11.5 0h3" color="currentColor"></svg:path>`,
})
export class HugeiconsCosine01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
