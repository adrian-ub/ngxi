import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChatAddOnSharpIcon],svg[material-symbols-light-chat-add-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.116 8.5h7.769v-1h-7.77zm0 4h4.769v-1h-4.77zm10.384 7v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-14-.711V3.5h15v6.517q-.192-.011-.385-.014q-.192-.003-.384-.003q-2.39 0-4.06 1.672T12 15.73q0 .192.003.385q.003.192.014.384H5.79z"></svg:path>`,
})
export class MaterialSymbolsLightChatAddOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
