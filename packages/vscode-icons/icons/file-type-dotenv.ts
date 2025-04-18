import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeDotenvIcon],svg[vscode-icons-file-type-dotenv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path d="M3.167 3.167h25.667v25.667H3.167z"></svg:path><svg:path fill="#ecd53f" fill-rule="nonzero" d="M30 2v28H2V2zM14.757 20.539H9.98v6.44h4.898v-1.085h-3.597V24.14h3.232v-1.085H11.28v-1.428h3.475v-1.09zm2.503 0h-1.264v6.44h1.207v-4.2l2.597 4.2h1.305v-6.44h-1.21v4.3zm5.97 0h-1.41l2.303 6.44h1.388l2.306-6.44h-1.38l-1.577 4.766l-1.63-4.767zM8.3 24.96H6.34v1.96H8.3z"></svg:path></svg:g>`,
})
export class VscodeIconsFileTypeDotenvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
