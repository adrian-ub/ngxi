import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayoutBorderFrameBorderCellFormatFormattingFullIcon],svg[streamline-interface-layout-border-frame-border-cell-format-formatting-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.5v3M8.5 7h-3m8 0h-2m-9 0h-2"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M7 .5v2m0 9v2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLayoutBorderFrameBorderCellFormatFormattingFullIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
