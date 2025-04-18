import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingFontSizeSizeTextFormattingFontFormatIcon],svg[streamline-interface-text-formatting-font-size-size-text-formatting-font-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 12.5l3.14-7.33a.39.39 0 0 1 .72 0l3.14 7.33M7.91 9.21h4.18M.5 12.5L5.07 1.84a.57.57 0 0 1 1 0L7 3.94M2.55 7.72H5"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingFontSizeSizeTextFormattingFontFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
