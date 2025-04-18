import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChatPasteGo2OutlineSharpIcon],svg[material-symbols-light-chat-paste-go-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 20.289l-.708-.689l2.075-2.1H14.5v-1h4.867l-2.075-2.1l.708-.688L21.288 17zm-14.5-.5V4.5h15v6.517q-.125-.011-.25-.014T18 11t-.25.003t-.25.014V5.5h-13v11h7.517q-.011.125-.014.25T12 17t.003.25t.014.25H5.79zm1-3.289v-11z"></svg:path>`,
})
export class MaterialSymbolsLightChatPasteGo2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
