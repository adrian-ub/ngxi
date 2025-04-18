import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayoutBorderHorizontalBorderCellCenterFormatFormattingIcon],svg[streamline-interface-layout-border-horizontal-border-cell-center-format-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v3m-13-3v3m6.5-3v3M13.5 7H.5m11 6.5h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m3 0h3M7 .5v2m0 9v2"></svg:path>`,
})
export class StreamlineInterfaceLayoutBorderHorizontalBorderCellCenterFormatFormattingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
