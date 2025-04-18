import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCalendarAppsScriptOutlineSharpIcon],svg[material-symbols-calendar-apps-script-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.45 22q-.425 0-.712-.288T13.45 21t.288-.712t.712-.288h2.825l-2.3-1.625q-.35-.25-.412-.638t.162-.737t.625-.413t.75.163l2.325 1.6l-.975-2.65q-.15-.375.025-.75t.575-.525t.775.025t.525.575l.95 2.65l.75-2.725q.125-.4.462-.612t.738-.088t.625.463t.1.737L21.225 22zM3 20V4h3V2h2v2h6V2h2v2h3v8.1q-.5-.075-1-.075t-1 .075V10H5v8h7q0 .5.075 1t.275 1zM5 8h12V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsCalendarAppsScriptOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
