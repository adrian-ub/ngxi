import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoneyOutlineIcon],svg[material-symbols-light-money-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.77 15.5h2.96q.213 0 .357-.144t.144-.356V9q0-.213-.144-.356t-.356-.144h-2.962q-.212 0-.356.144T14.269 9v6q0 .213.144.356t.356.144m.5-1v-5h1.962v5zm-6.23 1H12q.213 0 .356-.144T12.5 15V9q0-.213-.144-.356T12 8.5H9.039q-.213 0-.357.144T8.54 9v6q0 .213.143.356t.357.144m.5-1v-5h1.96v5zm-3.77 1h1v-7h-1zM3 19V5h18v14zM4 6v12zm0 12h16V6H4z"></svg:path>`,
})
export class MaterialSymbolsLightMoneyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
