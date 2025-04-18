import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiConfusedFaceIcon],svg[openmoji-confused-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36.2 13.316c-12.572 0-22.8 10.228-22.8 22.8s10.228 22.8 22.8 22.8S59 48.688 59 36.116s-10.228-22.8-22.8-22.8"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44.7 43.92c-6.328-1.736-11.41-.906-17.4 1.902"></svg:path><svg:path d="M30 31a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiConfusedFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
