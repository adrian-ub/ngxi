import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTfsIcon],svg[vscode-icons-file-type-tfs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#68217a" d="M10.175 18.342a8.171 8.171 0 1 1 8.171-8.171a8.18 8.18 0 0 1-8.171 8.171m0-11.673a3.5 3.5 0 1 0 3.5 3.5a3.506 3.506 0 0 0-3.5-3.5m17.914 17.354a4.2 4.2 0 1 1-1.231-2.971a4.2 4.2 0 0 1 1.231 2.971M30 6.21a4.2 4.2 0 1 1-1.231-2.971A4.2 4.2 0 0 1 30 6.21M10.416 25.8a4.2 4.2 0 1 1-1.231-2.971a4.2 4.2 0 0 1 1.231 2.971"></svg:path><svg:path fill="#68217a" d="m15.54 7.42l7.937-2.014l.689 2.715l-7.938 2.013zM5.342 23.331l1.868-7.368l2.716.689l-1.868 7.368zm8.965-6.916l1.99-1.97l6.538 6.603l-1.99 1.97z"></svg:path>`,
})
export class VscodeIconsFileTypeTfsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
