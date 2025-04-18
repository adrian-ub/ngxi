import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStoreLocation01Icon],svg[hugeicons-store-location-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.967 10.002v5c0 2.828 0 4.243.878 5.121c.88.879 2.293.879 5.122.879h3m-5-4h4m7.5-3.5c1.933 0 3.5 1.538 3.5 3.434c0 2.146-2.116 3.2-3.125 4.809c-.215.343-.52.343-.75 0c-1.041-1.547-3.125-2.708-3.125-4.809c0-1.896 1.567-3.434 3.5-3.434m0 3.5h.009m-8.372-9.079c-.282 1.02-1.308 2.779-3.256 3.034c-1.72.225-3.026-.527-3.359-.841c-.367-.255-1.205-1.071-1.41-1.581s.034-1.614.205-2.065l.683-1.98c.167-.498.558-1.675.958-2.073s1.21-.415 1.544-.415h7.006c1.803.025 5.746-.016 6.525 0c.78.016 1.248.67 1.385.95C21.548 5.773 22 7.389 22 8.077c-.152.734-.78 2.119-3 2.728c-2.307.633-3.615-.598-4.025-1.07m-5.82 0c.325.399 1.344 1.202 2.82 1.223c1.477.02 2.752-1.011 3.205-1.53c.128-.153.405-.606.693-1.504" color="currentColor"></svg:path>`,
})
export class HugeiconsStoreLocation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
