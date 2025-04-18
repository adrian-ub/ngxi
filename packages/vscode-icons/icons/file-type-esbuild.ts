import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeEsbuildIcon],svg[vscode-icons-file-type-esbuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14" fill="#ffcf00"></svg:circle><svg:path fill="#191919" d="m18.2 23.8l-2.4-2.4l5.5-5.5l-5.5-5.5L18.2 8l7.8 7.8zm-8.4 0l-2.4-2.4l5.5-5.5l-5.5-5.5L9.8 8l7.8 7.8z"></svg:path>`,
})
export class VscodeIconsFileTypeEsbuildIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
