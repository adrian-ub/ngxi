import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingTranslateOptionsTextTranslateIcon],svg[streamline-interface-text-formatting-translate-options-text-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.5 13.5l3.14-7.33a.39.39 0 0 1 .72 0l3.14 7.33m-5.59-3.29h4.18M.5 2.5h9M5 .5v2m3 0l-6 7m0-7l3.94 4.6"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingTranslateOptionsTextTranslateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
