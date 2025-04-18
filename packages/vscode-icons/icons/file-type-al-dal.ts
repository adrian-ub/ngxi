import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAlDalIcon],svg[vscode-icons-file-type-al-dal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9F4246" d="M11.6 8c-.2-.6-.8-1-1.5-1H10c-.5 0-1.1.4-1.4 1L2 25h3.8l1-2.8h6.6l1 2.8h3.8zM7.9 19l2.2-6.1l2.2 6.1zm15.9 2.7V7.1h-3.5v15.6c0 1.2 1 2.2 2.3 2.3H30v-3.3z"></svg:path>`,
})
export class VscodeIconsFileTypeAlDalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
