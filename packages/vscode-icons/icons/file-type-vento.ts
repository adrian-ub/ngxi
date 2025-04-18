import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeVentoIcon],svg[vscode-icons-file-type-vento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width=".875"><svg:path fill="#0af" d="M2.004 2.02h9.625l12.25 28h-8.75z"></svg:path><svg:path fill="#ff0080" d="M20.379 2.02h9.625l-6.125 28h-8.75z"></svg:path><svg:path fill="navy" d="m17.754 16.02l6.125 14h-8.75z"></svg:path></svg:g>`,
})
export class VscodeIconsFileTypeVentoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
