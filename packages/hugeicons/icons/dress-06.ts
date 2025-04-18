import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress06Icon],svg[hugeicons-dress-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.177 9.032c3.726 3.637-2.052 8.337.48 11.531c1.402 1.768 11.073 2.059 12.705 0c2.53-3.192-3.233-7.887.48-11.53"></svg:path><svg:path d="M6.355 13c-2.265-.209-4.112-1.672-4.345-3.761a1.8 1.8 0 0 1 .128-.875c.715-1.793 2.714-4.833 5.778-6.316a.49.49 0 0 1 .6.146c.76.973 2.069 2.49 3.484 2.49s2.724-1.517 3.484-2.49a.49.49 0 0 1 .6-.146c3.064 1.483 5.063 4.523 5.778 6.316c.11.279.161.577.128.875c-.233 2.09-2.06 3.55-4.326 3.758"></svg:path></svg:g>`,
})
export class HugeiconsDress06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
