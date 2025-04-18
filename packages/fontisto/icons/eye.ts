import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoEyeIcon],svg[fontisto-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0C7.164 0 0 11.844 0 11.844S7.164 24 16 24s16-12.156 16-12.156S24.836 0 16 0m0 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path><svg:path fill="currentColor" d="M20 12.016a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class FontistoEyeIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
