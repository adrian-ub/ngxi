import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSendTimeExtensionIcon],svg[material-symbols-light-send-time-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 21.192v-3.384L17.346 17l-3.846-.808v-3.384L21.885 17zM5 20q-.421 0-.71-.29Q4 19.422 4 19v-3.954q.854-.25 1.427-.945T6 12.5t-.573-1.601T4 9.954V6q0-.421.29-.71Q4.579 5 5 5h4q.27-.858.946-1.371q.677-.514 1.554-.514t1.554.514T14 5h4q.421 0 .71.29q.29.289.29.71v7.327l-7.308-3.654v8.358q-.961-.05-1.705.476T8.954 20z"></svg:path>`,
})
export class MaterialSymbolsLightSendTimeExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
