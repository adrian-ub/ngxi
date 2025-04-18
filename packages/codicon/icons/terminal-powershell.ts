import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTerminalPowershellIcon],svg[codicon-terminal-powershell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.5 1.007l12.999.17l.43.501l-1.82 12.872l-.57.489l-13-.17l-.43-.502L1.93 1.495zM1.18 13.885l11.998.157l1.68-11.882L2.86 2.003zm5.791-3.49l-.14.991l5 .066l.14-.99zm1.71-2.457l-3.663-2.93l-.692.796l2.636 2.112L3.739 9.95l.465.812z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconTerminalPowershellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
