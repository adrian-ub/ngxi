import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBitingLipIcon],svg[fluent-emoji-flat-biting-lip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#533566" d="M4.507 16.992h22.808v3.393l-5.059 4.071l-17.75-4.071z"></svg:path><svg:path fill="#F92F60" d="M26.453 13.875c.43.719 2.469 3.969 2.75 4.422s.513 1.797 0 2.578c-1.797 2.734-3.82 4.143-5.89 4.969c-.992.395-3.75 1-5.875 1c-2.093 0-9.278-1.516-15.167-6.652A.71.71 0 0 1 2 19.634a.95.95 0 0 1 .132-.484l3.422-5.223c.239-.496 1.014-1.538 1.014-1.538A6.88 6.88 0 0 1 11.788 10a6.9 6.9 0 0 1 4.2 1.416a6.9 6.9 0 0 1 4.2-1.416a6.9 6.9 0 0 1 5.226 2.394s.61.762 1.04 1.481M5.407 19.607c-.237.08-.078.346.172.346h8.66l6.732 2.474c.885.325 1.873.21 2.66-.313L26.66 20.1c.14-.092.238-.272.114-.384a.6.6 0 0 0-.189-.108l-2.098-.712H7.5z"></svg:path><svg:path fill="#F3EEF8" d="m7.411 18.927l1.242-.422a22.86 22.86 0 0 1 14.68 0l1.246.423l-.254.543c-.207.4-.6.666-1.047.704c-1.418.122-4.672.182-7.264.184h-.736c-2.188.002-4.377.004-6.556-.184a1.3 1.3 0 0 1-1.047-.704z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBitingLipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
