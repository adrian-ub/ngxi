import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCardiogram01Icon],svg[hugeicons-cardiogram-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M11 21.5c-3.75 0-5.625 0-6.939-1.008a5.2 5.2 0 0 1-1.106-1.168C2 17.937 2 15.958 2 12s0-5.937.955-7.324A5.2 5.2 0 0 1 4.06 3.508C5.375 2.5 7.251 2.5 11 2.5h2c3.75 0 5.625 0 6.939 1.008c.424.325.798.72 1.106 1.168C22 6.063 22 8.042 22 12s0 5.937-.955 7.324a5.2 5.2 0 0 1-1.106 1.168C18.625 21.5 16.749 21.5 13 21.5zM2.5 15h19"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.009 18H7zM11 18h-.009z"></svg:path><svg:path stroke="currentColor" d="M7.009 18H7m4 0h-.009M17 10.2c-.455 0-.934.028-1.343-.223c-.156-.096-.26-.228-.466-.493L13.25 7l-2.5 4l-1.807-1.734c-.256-.246-.506-.496-.845-.594C7.852 8.6 7.568 8.6 7 8.6"></svg:path></svg:g>`,
})
export class HugeiconsCardiogram01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
