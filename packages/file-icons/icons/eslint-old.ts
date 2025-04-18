import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsEslintOldIcon],svg[file-icons-eslint-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M303.26 0L54.492 80.844L0 336.885l194.525 175.114l248.768-80.844l54.492-256.041zM181.1 138.537h135.585L384.561 256l-67.876 117.463H181.1L113.432 256z"></svg:path>`,
})
export class FileIconsEslintOldIcon {
  readonly viewBox = input("0 0 498 512")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
