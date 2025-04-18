import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBicycle01Icon],svg[hugeicons-bicycle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 20.003a4 4 0 1 0 0-8a4 4 0 0 0 0 8m12 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M6 16.003h4.37a1 1 0 0 0 .87-.506l4.26-7.494m-3.5 5l-5-6m0 0H5m2 0h2m11.004-.784c-.204-.576-.564-1.476-1.764-1.896c-.78-.3-2.7-.42-2.94-.24c-.347.086-.36.48-.192 1.02c.136.579.348 1.325.54 2.04c.492 1.83 1.572 5.796 2.376 8.856"></svg:path></svg:g>`,
})
export class HugeiconsBicycle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
