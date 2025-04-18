import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoVisualStudioIcon],svg[fontisto-visual-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.858 23.998l-9.771-9.484l-5.866 4.465L0 17.864V6.145l2.234-1.121l5.87 4.469L17.851 0l5.587 2.239V21.77L17.859 24zm-.563-16.186l-5.577 4.173l5.58 4.202zM2.788 9.497v5.016l2.787-2.525z"></svg:path>`,
})
export class FontistoVisualStudioIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
