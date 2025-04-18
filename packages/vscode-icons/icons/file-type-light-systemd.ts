import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightSystemdIcon],svg[vscode-icons-file-type-light-systemd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#201a26" d="M2 12v8h3.256v-1.231H3.3v-5.538h1.956V12Zm24.744 0v1.231H28.7v5.538h-1.956V20H30v-8Z"></svg:path><svg:path fill="#30d475" d="m17.628 16l5.21-2.769v5.538Z"></svg:path><svg:ellipse cx="12.093" cy="16" fill="#30d475" rx="2.93" ry="2.769"></svg:ellipse>`,
})
export class VscodeIconsFileTypeLightSystemdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
