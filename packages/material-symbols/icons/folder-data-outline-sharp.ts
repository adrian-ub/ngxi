import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderDataOutlineSharpIcon],svg[material-symbols-folder-data-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 23q-.825 0-1.412-.587T13 21q0-.575.275-1.025T14 19.25v-5.525q-.45-.275-.725-.712T13 12q0-.825.588-1.412T15 10t1.413.588T17 12q0 .575-.275 1.013t-.725.712V16.6l4-1.325v-1.55q-.45-.275-.725-.712T19 12q0-.825.588-1.412T21 10t1.413.588T23 12q0 .575-.275 1.013t-.725.712V16.7l-6 2v.55q.45.275.725.725T17 21q0 .825-.587 1.413T15 23M4 20V6zm-2 0V4h8l2 2h10v2H11.175l-2-2H4v12h7v2z"></svg:path>`,
})
export class MaterialSymbolsFolderDataOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
