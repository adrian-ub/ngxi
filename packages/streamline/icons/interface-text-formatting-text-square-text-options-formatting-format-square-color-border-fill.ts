import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingTextSquareTextOptionsFormattingFormatSquareColorBorderFillIcon],svg[streamline-interface-text-formatting-text-square-text-options-formatting-format-square-color-border-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 10.78l3.14-7.33a.39.39 0 0 1 .72 0l3.14 7.33M4.69 8h4.62"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceTextFormattingTextSquareTextOptionsFormattingFormatSquareColorBorderFillIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
