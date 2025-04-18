import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLmmsIcon],svg[simple-icons-lmms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.714 0A1.71 1.71 0 0 0 0 1.714v20.572C0 23.236.765 24 1.714 24h20.572A1.71 1.71 0 0 0 24 22.286V1.714A1.71 1.71 0 0 0 22.286 0zM12 3l9 5.143v10.286l-3 1.714l-3-1.714V15l3-1.714V9.857L12 6.43L6 9.857v3.429L9 15v3.429l-3 1.714l-3-1.714V8.143Z"></svg:path>`,
})
export class SimpleIconsLmmsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
