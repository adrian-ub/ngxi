import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChatPasteGo2OutlineIcon],svg[material-symbols-light-chat-paste-go-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 20.289l-.708-.689l2.075-2.1H14.5v-1h4.867l-2.075-2.1l.708-.688L21.288 17zm-14.5-.5V6.115q0-.672.472-1.144T5.116 4.5h11.769q.67 0 1.143.472q.472.472.472 1.144v4.901q-.134-.011-.25-.014T18 11t-.25.003q-.115.003-.25.014V6.116q0-.27-.173-.443t-.442-.173H5.115q-.269 0-.442.173t-.173.443V16.5h7.517q-.011.135-.014.25Q12 16.866 12 17t.003.25t.014.25H5.79zm1-3.289v-11z"></svg:path>`,
})
export class MaterialSymbolsLightChatPasteGo2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
