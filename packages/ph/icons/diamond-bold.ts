import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiamondBoldIcon],svg[ph-diamond-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.16 113.89L142.1 17.83a20 20 0 0 0-28.21 0l-96 96.06a20 20 0 0 0 0 28.22l96.05 96.06a20 20 0 0 0 28.21 0l96-96.06a20 20 0 0 0 0-28.22ZM128 218.33L37.68 128L128 37.67L218.32 128Z"></svg:path>`,
})
export class PhDiamondBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
