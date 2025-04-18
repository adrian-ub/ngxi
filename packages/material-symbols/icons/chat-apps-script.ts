import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChatAppsScriptIcon],svg[material-symbols-chat-apps-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V5q0-.825.588-1.412T5 3h12q.825 0 1.413.588T19 5v5.075q-.25-.05-.5-.062T18 10q-2.5 0-4.25 1.75T12 16q0 .25.013.5t.062.5H6zM7 9h8V7H7zm0 4h5v-2H7zm7.45 7q-.425 0-.712-.288T13.45 19t.288-.712t.712-.288h2.825l-2.3-1.625q-.35-.25-.412-.638t.162-.737t.625-.413t.75.163l2.325 1.6l-.975-2.65q-.15-.375.025-.75t.575-.525t.775.025t.525.575l.95 2.65l.75-2.725q.125-.4.462-.612t.738-.088t.613.463t.087.737L21.2 20z"></svg:path>`,
})
export class MaterialSymbolsChatAppsScriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
