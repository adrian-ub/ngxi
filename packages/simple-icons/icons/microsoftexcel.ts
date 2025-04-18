import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMicrosoftexcelIcon],svg[simple-icons-microsoftexcel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1.5q.41 0 .7.3q.3.29.3.7v19q0 .41-.3.7q-.29.3-.7.3H7q-.41 0-.7-.3q-.3-.29-.3-.7V18H1q-.41 0-.7-.3q-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7q.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87l2.34-3.8H7.46l-1.3 2.4l-.05.08l-.04.09l-.64-1.28l-.66-1.29H2.59l2.27 3.82l-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"></svg:path>`,
})
export class SimpleIconsMicrosoftexcelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
