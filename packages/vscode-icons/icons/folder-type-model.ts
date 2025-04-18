import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeModelIcon],svg[vscode-icons-folder-type-model-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#558dbf" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#b2cde5" d="M20.62 10v5.999l-5.188-3"></svg:path><svg:path fill="#b2cde5" d="m25.807 12.999l-5.187 3V10"></svg:path><svg:path fill="#4c89c3" d="M25.807 12.999V19l-5.187-3.001"></svg:path><svg:path fill="#0057a9" d="M15.432 12.999V19l5.188-3.001m0 0V22l-5.188-3"></svg:path><svg:path fill="#4c89c3" d="M20.622 15.999L20.62 22l5.187-2.998"></svg:path><svg:path fill="#b2cde5" d="M25.807 19v6l-5.187-3"></svg:path><svg:path fill="#b2cde5" d="M15.432 19v6l5.188-3"></svg:path><svg:path fill="#4c89c3" d="M20.62 22v6l-5.188-3"></svg:path><svg:path fill="#0057a9" d="m20.622 22l-.002 6l5.187-2.998"></svg:path><svg:path fill="#b2cde5" d="M15.432 19v6l-5.187-3"></svg:path><svg:path fill="#0057a9" d="M10.245 22v6l5.187-3m0 0v6l-5.187-3"></svg:path><svg:path fill="#4c89c3" d="m15.434 25l-.002 6l5.188-2.998"></svg:path><svg:path fill="#b2cde5" d="M30.995 22.002L25.807 25l.003-6"></svg:path><svg:path fill="#4c89c3" d="M30.995 22v6l-5.188-3"></svg:path><svg:path fill="#0057a9" d="M25.807 25v6l-5.187-3"></svg:path><svg:path fill="#4c89c3" d="m25.81 25l-.003 6l5.188-2.998"></svg:path>`,
})
export class VscodeIconsFolderTypeModelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
