import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDejectedFaceIcon],svg[openmoji-dejected-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36.2 13.32c-12.57 0-22.8 10.23-22.8 22.8s10.23 22.8 22.8 22.8S59 48.69 59 36.12s-10.23-22.8-22.8-22.8"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M28.99 51h14.02"></svg:path><svg:path d="M29.2 42a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m19.6 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiDejectedFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
