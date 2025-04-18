import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderInfoOutlineIcon],svg[material-symbols-folder-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v4.7v-.7zm6.7 2H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v4.125q-.425-.45-.925-.8T20 10.7V8h-8.825l-2-2H4v12h6.075q.075.525.238 1.025T10.7 20m6.3-8q2.075 0 3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463T12 17t1.463-3.537T17 12m-.5 8h1v-4h-1zm.5-5q.2 0 .35-.15t.15-.35t-.15-.35T17 14t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsFolderInfoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
