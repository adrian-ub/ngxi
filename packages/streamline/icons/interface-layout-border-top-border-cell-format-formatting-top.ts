import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayoutBorderTopBorderCellFormatFormattingTopIcon],svg[streamline-interface-layout-border-top-border-cell-format-formatting-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 11.5v1a1 1 0 0 1-1 1h-1m2-9v4m-5 5h-3m8-13H.5m8 6.5h-3M7 8.5v-3m0 8v-2m-6.5 0v1a1 1 0 0 0 1 1h1m-2-9v4m13-1.5h-2m-9 0h-2"></svg:path>`,
})
export class StreamlineInterfaceLayoutBorderTopBorderCellFormatFormattingTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
