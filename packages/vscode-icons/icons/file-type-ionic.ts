import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeIonicIcon],svg[vscode-icons-file-type-ionic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.024" cy="15.923" r="5.716" fill="#4e8ef7"></svg:circle><svg:path fill="#4e8ef7" d="M27.688 6.224a1.964 1.964 0 0 0-3.252-1.484a14.013 14.013 0 1 0 2.77 2.77a1.96 1.96 0 0 0 .482-1.286M16.023 29.452a13.529 13.529 0 1 1 8.1-24.362a1.964 1.964 0 0 0 2.738 2.738a13.523 13.523 0 0 1-10.838 21.624"></svg:path>`,
})
export class VscodeIconsFileTypeIonicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
