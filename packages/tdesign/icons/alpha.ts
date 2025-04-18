import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAlphaIcon],svg[tdesign-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v3.866l5.336-3.24l1.038 1.71L14 8.206v8.588l6.374 3.87l-1.038 1.71L14 19.134V22h-2v-4.08L3.073 12.5L12 7.08V2zm-2 7.42L6.927 12.5L12 15.58z"></svg:path>`,
})
export class TdesignAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
