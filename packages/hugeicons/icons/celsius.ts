import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCelsiusIcon],svg[hugeicons-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="5" cy="6" r="2"></svg:circle><svg:path d="M21 7c-.044-.653-.144-1.113-.368-1.5a3 3 0 0 0-1.102-1.098C18.831 4 17.894 4 16.018 4s-2.814 0-3.513.402A3 3 0 0 0 11.403 5.5C11 6.196 11 7.13 11 9v6c0 1.87 0 2.804.403 3.5c.265.456.645.835 1.102 1.098c.699.402 1.637.402 3.513.402s2.813 0 3.512-.402a3 3 0 0 0 1.102-1.098c.224-.387.324-.847.368-1.5"></svg:path></svg:g>`,
})
export class HugeiconsCelsiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
