import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCosine02Icon],svg[hugeicons-cosine-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 3.271c-4-1.936-5.412 7.074-5.669 8.684C15.467 17.362 14.121 21 12 21c-2.12 0-3.467-3.638-4.331-9.045C7.412 10.345 6 1.335 2 3.27M2 12h3m14 0h3m-12 0h4" color="currentColor"></svg:path>`,
})
export class HugeiconsCosine02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
