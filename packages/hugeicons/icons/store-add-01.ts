import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStoreAdd01Icon],svg[hugeicons-store-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.967 10.002v5c0 2.828 0 4.243.878 5.121c.88.879 2.293.879 5.122.879h3.5m8.5-11v1.5m-6 7h7m-3.5 3.5v-7m-11.5 2h4m-.863-9.079c-.282 1.02-1.308 2.779-3.256 3.034c-1.72.225-3.026-.527-3.359-.841c-.367-.255-1.205-1.071-1.41-1.581s.034-1.614.205-2.065l.683-1.98c.167-.498.558-1.675.958-2.073s1.21-.415 1.544-.415h7.006c1.803.025 5.746-.016 6.525 0c.78.016 1.248.67 1.385.95C21.548 5.773 22 7.389 22 8.077c-.152.734-.78 2.119-3 2.728c-2.307.633-3.615-.598-4.025-1.07m-5.82 0c.325.399 1.344 1.202 2.82 1.223c1.477.02 2.752-1.011 3.205-1.53c.128-.153.405-.606.693-1.504" color="currentColor"></svg:path>`,
})
export class HugeiconsStoreAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
