import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMollieIcon],svg[hugeicons-mollie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.063h-4c-.41 0-.75-.34-.75-.75v-6a1.25 1.25 0 0 0-2.5 0v6c0 .41-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75v-6a1.25 1.25 0 0 0-2.5 0v6c0 .41-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75v-6c0-3.72 3.03-6.75 6.75-6.75c1.45 0 2.84.46 4 1.31a6.74 6.74 0 0 1 4-1.31c3.72 0 6.75 3.03 6.75 6.75v6c0 .41-.34.75-.75.75m-3.25-1.5h2.5v-5.25c0-2.89-2.36-5.25-5.25-5.25c-1.29 0-2.54.48-3.5 1.34c-.28.26-.72.26-1 0A5.26 5.26 0 0 0 8 7.063c-2.89 0-5.25 2.36-5.25 5.25v5.25h2.5v-5.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v5.25h2.5v-5.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsMollieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
