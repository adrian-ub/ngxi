import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeProgressIcon],svg[vscode-icons-file-type-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5ce500" d="M29.107 9.963v14a1.08 1.08 0 0 1-.489.845l-.458.274l-3.49 2.018l-2.357 1.372l-.489.274V13.6L8.719 6.03l6.224-3.587l.574-.327a1.08 1.08 0 0 1 .977 0L25.122 7.1L29.1 9.4v.563Z"></svg:path><svg:path fill="#5ce500" d="m18.909 15.284l-2.687-1.553L9.935 10.1a1.1 1.1 0 0 0-.977 0l-5.58 3.222l-.486.283l9.466 5.464V30l5.571-3.219l.491-.274a1.08 1.08 0 0 0 .489-.845Z"></svg:path><svg:path fill="#5ce500" d="m2.893 24.536l6.548 3.782v-7.569z"></svg:path>`,
})
export class VscodeIconsFileTypeProgressIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
