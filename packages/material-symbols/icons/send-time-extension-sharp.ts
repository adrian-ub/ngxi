import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSendTimeExtensionSharpIcon],svg[material-symbols-send-time-extension-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22v-4l4-1l-4-1v-4l10 5zM3 21v-5.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V4h6q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h6v9.25l-9-4.5v9.3q-1 .2-1.6.938T8.8 21z"></svg:path>`,
})
export class MaterialSymbolsSendTimeExtensionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
