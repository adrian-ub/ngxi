import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSendTimeExtensionSharpIcon],svg[material-symbols-light-send-time-extension-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 21.192v-3.384L17.346 17l-3.846-.808v-3.384L21.885 17zM4 20v-4.954q.854-.25 1.427-.945T6 12.5t-.573-1.601T4 9.954V5h5q.27-.858.946-1.371q.677-.514 1.554-.514t1.554.514T14 5h5v8.327l-7.308-3.654v8.358q-.961-.05-1.705.476T8.954 20z"></svg:path>`,
})
export class MaterialSymbolsLightSendTimeExtensionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
