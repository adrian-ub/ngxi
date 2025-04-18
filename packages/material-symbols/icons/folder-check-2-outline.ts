import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCheck2OutlineIcon],svg[material-symbols-folder-check-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v5.3v-.3zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v4.275q-.45-.325-.95-.562T20 11.3V8h-8.825l-2-2H4v12h7q0 .525.075 1.025T11.3 20zm13.275.25l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075zM18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23t-3.537-1.463T13 18t1.463-3.537T18 13"></svg:path>`,
})
export class MaterialSymbolsFolderCheck2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
