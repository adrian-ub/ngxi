import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingTextTextOptionsFormattingFormatColorIcon],svg[streamline-interface-text-formatting-text-text-options-formatting-format-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.5h13M2.14 11L6.5.83a.54.54 0 0 1 1 0L11.86 11M4.07 6.5h5.86"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingTextTextOptionsFormattingFormatColorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
