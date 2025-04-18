import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayoutBorderBottomBorderBottomCellFormatFormattingIcon],svg[streamline-interface-layout-border-bottom-border-bottom-cell-format-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m-8 13h13m0-8v4m-13-4v4m6.5-4v3M8.5 7h-3m8 0h-2m-9 0h-2M7 .5v2"></svg:path>`,
})
export class StreamlineInterfaceLayoutBorderBottomBorderBottomCellFormatFormattingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
