import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStoreRemove01Icon],svg[hugeicons-store-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.967 10.002v5c0 2.828 0 4.243.878 5.121c.88.879 2.293.879 5.122.879h3.5m8.5-11v3m-5 3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3m-15 1h4m-.863-9.088c-.282 1.018-1.308 2.774-3.256 3.029c-1.72.224-3.026-.526-3.359-.84c-.367-.255-1.205-1.07-1.41-1.578c-.205-.51.034-1.612.205-2.062l.683-1.977c.167-.497.558-1.672.958-2.07s1.21-.414 1.544-.414h7.006c1.803.025 5.746-.016 6.525 0c.78.016 1.248.67 1.385.949C21.548 5.767 22 7.379 22 8.067c-.152.733-.78 2.115-3 2.723c-2.307.632-3.615-.597-4.025-1.07m-5.82 0c.325.4 1.344 1.202 2.82 1.223c1.477.02 2.752-1.01 3.205-1.527c.128-.153.405-.606.693-1.502" color="currentColor"></svg:path>`,
})
export class HugeiconsStoreRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
