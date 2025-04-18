import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStore02Icon],svg[hugeicons-store-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.967 10.496v5.001c0 2.83 0 4.244.878 5.124c.88.879 2.293.879 5.122.879h6c2.828 0 4.242 0 5.121-.88c.879-.879.879-2.293.879-5.123v-5.001m-14 7.497h4"></svg:path><svg:path d="M10.104 8.418c-.282 1.018-1.308 2.775-3.256 3.03c-1.72.224-3.026-.526-3.359-.84c-.367-.255-1.205-1.07-1.41-1.579c-.205-.51.034-1.612.205-2.062l.683-1.979c.167-.497.558-1.672.958-2.07s1.21-.414 1.544-.414h7.006c1.803.025 5.746-.016 6.525 0c.78.016 1.248.67 1.385.95C21.548 6.27 22 7.883 22 8.57c-.152.733-.78 2.116-3 2.724c-2.307.632-3.615-.597-4.025-1.07m-5.82 0c.325.4 1.344 1.202 2.82 1.223c1.477.02 2.752-1.01 3.205-1.528c.128-.153.405-.606.693-1.502"></svg:path></svg:g>`,
})
export class HugeiconsStore02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
