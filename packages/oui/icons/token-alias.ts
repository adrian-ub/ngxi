import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenAliasIcon],svg[oui-token-alias-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.075 6.953a.5.5 0 1 1-.707.707a1.5 1.5 0 0 0-2.122 0L4.125 9.782a1.5 1.5 0 1 0 2.121 2.121l1.145-1.144a.5.5 0 0 1 .707.707L6.953 12.61a2.5 2.5 0 1 1-3.535-3.535l2.121-2.122a2.5 2.5 0 0 1 3.536 0m3.535-3.535a2.5 2.5 0 0 1 0 3.535l-2.12 2.122a2.5 2.5 0 0 1-3.536 0a.5.5 0 1 1 .707-.708a1.5 1.5 0 0 0 2.122 0l2.121-2.12a1.5 1.5 0 1 0-2.121-2.122L8.637 5.269a.5.5 0 1 1-.707-.707l1.145-1.144a2.5 2.5 0 0 1 3.535 0"></svg:path>`,
})
export class OuiTokenAliasIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
