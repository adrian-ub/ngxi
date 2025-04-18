import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWoozyFaceIcon],svg[openmoji-woozy-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.264 27.629a7.17 7.17 0 0 1 4.47-2.607a7.08 7.08 0 0 1 4.339.765M41 27.077a7.17 7.17 0 0 0 4.91 1.637A7.08 7.08 0 0 0 50 27.077M24 41c-.256-.205-.48 8 5 8c5 0 4-8 9-5.6"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49 41s-.89 6.145-5 6.4c-3.769.233-5.162-6.118-9-4"></svg:path><svg:path d="M30 33a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18-2a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiWoozyFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
