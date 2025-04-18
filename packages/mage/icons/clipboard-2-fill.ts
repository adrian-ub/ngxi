import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageClipboard2FillIcon],svg[mage-clipboard-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.69 5.015a3.7 3.7 0 0 0-2-1v-.28a1.73 1.73 0 0 0-1.75-1.72h-8a1.74 1.74 0 0 0-1.75 1.72v.3a3.8 3.8 0 0 0-1.86 1a3.58 3.58 0 0 0-1.08 2.58v9.72a4.6 4.6 0 0 0 1.4 3.29A4.73 4.73 0 0 0 8 21.985h8a4.73 4.73 0 0 0 3.35-1.36a4.6 4.6 0 0 0 1.4-3.29v-9.73a3.66 3.66 0 0 0-1.06-2.59m-12-1.29a.24.24 0 0 1 .25-.22h8a.24.24 0 0 1 .25.22v2a.24.24 0 0 1-.25.22h-8a.24.24 0 0 1-.25-.22zm8.16 13.13h-7.7a1 1 0 0 1 0-2h7.7a1 1 0 1 1 0 2m0-4.39h-7.7a1 1 0 0 1 0-2h7.7a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageClipboard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
