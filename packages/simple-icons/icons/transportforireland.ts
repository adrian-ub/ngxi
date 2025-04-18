import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTransportforirelandIcon],svg[simple-icons-transportforireland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v12c0 6.62 5.38 12 12 12h12V11.978h-.022c0-6.62-5.38-11.978-12-11.978zm3.376 8.145h6.337v1.546h-2.33v6.12H5.706v-6.12h-2.33zm8.014 0h5.837V9.67h-4.138v1.633h3.659v1.546h-3.659v2.962H11.39zm7.535 0h1.678v7.666h-1.678Z"></svg:path>`,
})
export class SimpleIconsTransportforirelandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
