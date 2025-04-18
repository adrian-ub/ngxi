import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTaco01Icon],svg[hugeicons-taco-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 9c-4.32 0-8.01 2.937-9.466 7.072c-.528 1.498-.791 2.246-.185 3.087C2.954 20 3.943 20 5.92 20h12.16c1.978 0 2.967 0 3.572-.841c.606-.841.343-1.59-.184-3.087C20.01 11.937 16.32 9 12 9"></svg:path><svg:path d="M21.33 15a3.24 3.24 0 0 0-.24-4.222a3.3 3.3 0 0 1-.898-1.975c-.148-1.677-1.566-3.016-3.344-3.144l-.204-.015a4 4 0 0 1-2.153-.812c-1.445-1.11-3.537-1.11-4.981 0a4 4 0 0 1-2.154.812l-.204.015c-1.778.128-3.196 1.467-3.344 3.144a3.3 3.3 0 0 1-.898 1.975A3.24 3.24 0 0 0 2.67 15m13.338-1h-.01m-2.99 2h-.01m5.01 1h-.01"></svg:path></svg:g>`,
})
export class HugeiconsTaco01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
