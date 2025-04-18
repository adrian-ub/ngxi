import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDraftsOutlineIcon],svg[material-symbols-light-drafts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.192l8.512 5.054q.219.16.353.394q.135.235.135.51v10.235q0 .69-.462 1.153T19.385 20H4.615q-.69 0-1.152-.462T3 18.384V8.15q0-.275.135-.51q.134-.234.354-.394zm0 10.458L19.8 8L12 3.35L4.2 8zm0 1.158L4 9.046v9.339q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.442V9.046zM12 19h8H4z"></svg:path>`,
})
export class MaterialSymbolsLightDraftsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
