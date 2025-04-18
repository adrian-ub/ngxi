import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFthtmlIcon],svg[vscode-icons-file-type-fthtml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef7623" d="M6.672 16.3V29h5.188V16.188h7.791l-.14 10.44L23.9 29h5v-4.178h-4.079v-8.634H30v-4.2h-5.179V5.381l-5.31 2.87v3.741H11.86V7.2h4.2L16 3h-4.987L6.672 5.381v6.611H2v4.2Z"></svg:path>`,
})
export class VscodeIconsFileTypeFthtmlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
