import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeDiffIcon],svg[vscode-icons-file-type-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c00000" d="M6.975 3h18.05v6.017H6.975z"></svg:path><svg:path fill="green" d="M12.992 10.95v6.017H6.975v6.017h6.017V29h6.017v-6.017h6.017v-6.016h-6.018V10.95Z"></svg:path>`,
})
export class VscodeIconsFileTypeDiffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
