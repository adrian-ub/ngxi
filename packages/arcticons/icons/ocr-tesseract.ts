import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOcrTesseractIcon],svg[arcticons-ocr-tesseract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.66 22.059h32.68a3.16 3.16 0 0 1 3.16 3.16v10.2a3.16 3.16 0 0 1-3.16 3.16H7.66a3.16 3.16 0 0 1-3.16-3.16v-10.2a3.16 3.16 0 0 1 3.16-3.16m32.66.004L5.37 9.421"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.236 28.144h22.338v4.35H17.236zm-8.899 0h4.343v4.35H8.337z"></svg:path>`,
})
export class ArcticonsOcrTesseractIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
