import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayoutBorderRightBorderCellFormatFormattingRightIcon],svg[streamline-interface-layout-border-right-border-cell-format-formatting-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 13.5h-1a1 1 0 0 1-1-1v-1m9 2h-4m-5-5v-3m13 8V.5M7 8.5v-3M5.5 7h3m-8 0h2m0-6.5h-1a1 1 0 0 0-1 1v1m9-2h-4m1.5 13v-2m0-9v-2"></svg:path>`,
})
export class StreamlineInterfaceLayoutBorderRightBorderCellFormatFormattingRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
