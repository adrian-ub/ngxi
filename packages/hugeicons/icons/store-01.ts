import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStore01Icon],svg[hugeicons-store-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.967 10.496v5.002c0 2.83 0 4.244.878 5.123c.88.88 2.293.88 5.122.88h6c2.828 0 4.242 0 5.121-.88c.879-.879.879-2.294.879-5.123v-5.002"></svg:path><svg:path d="M14.967 16.993c-.684.607-1.773 1-3 1s-2.316-.393-3-1m1.137-8.575c-.282 1.019-1.308 2.776-3.256 3.03c-1.72.225-3.026-.526-3.359-.84c-.367-.255-1.205-1.07-1.41-1.578c-.205-.51.034-1.613.205-2.063l.683-1.978c.167-.497.558-1.672.958-2.07s1.21-.415 1.544-.415h7.006c1.803.026 5.746-.016 6.525 0c.78.016 1.248.67 1.385.95C21.548 6.27 22 7.884 22 8.57c-.152.734-.78 2.116-3 2.725c-2.307.632-3.615-.598-4.025-1.07m-5.82 0c.325.399 1.344 1.202 2.82 1.222c1.477.02 2.752-1.01 3.205-1.527c.128-.153.405-.606.693-1.503"></svg:path></svg:g>`,
})
export class HugeiconsStore01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
