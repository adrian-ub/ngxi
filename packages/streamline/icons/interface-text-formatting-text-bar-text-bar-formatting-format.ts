import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingTextBarTextBarFormattingFormatIcon],svg[streamline-interface-text-formatting-text-bar-text-bar-formatting-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 13.5H9a2 2 0 0 1-2-2a2 2 0 0 1-2 2H3.5m7-13H9a2 2 0 0 0-2 2a2 2 0 0 0-2-2H3.5m3.5 2v9M4.5 8h5"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingTextBarTextBarFormattingFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
