import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLibreofficebaseIcon],svg[simple-icons-libreofficebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13h-1v-1h1zm0 1h-1v1h1zm0 2h-1v1h1zm-.6-16H15l7 7V0zM13 0l9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3zM6 11c0 .552 1.343 1 3 1s3-.448 3-1v-1c0-.552-1.343-1-3-1s-3 .448-3 1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1zm12-6h-5v7h5zm-3 1h-1v1h1zm0 4h-1v1h1zm0-2h-1v1h1z"></svg:path>`,
})
export class SimpleIconsLibreofficebaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
