import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTucIcon],svg[vscode-icons-file-type-tuc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2eb9db" d="M9.774 14.626a9.9 9.9 0 0 0 .447 2.942a5.6 5.6 0 0 0 .392 1.074a6 6 0 0 0 11.193-4.165a9.992 9.992 0 0 1-18.573 7.248a15 15 0 0 1-.615-1.66a13.989 13.989 0 0 1 26.172-9.744a10 10 0 0 0-19.016 4.305"></svg:path><svg:path fill="#388bba" d="M30 16.023a13.995 13.995 0 0 1-26.767 5.7a9.992 9.992 0 0 0 18.572-7.248a5.5 5.5 0 0 0-.4-1.065a6 6 0 0 0-11.192 4.164a9.992 9.992 0 0 1 18.572-7.241a15 15 0 0 1 .62 1.658A14 14 0 0 1 30 16.023"></svg:path>`,
})
export class VscodeIconsFileTypeTucIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
