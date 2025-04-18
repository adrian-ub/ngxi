import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderSupervisedOutlineSharpIcon],svg[material-symbols-folder-supervised-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v4.3v-.3zm-2 2V4h8l2 2h10v5.275q-.45-.325-.95-.562T20 10.3V8h-8.825l-2-2H4v12h7.075q.075.525.238 1.025T11.7 20zm12 0v-.55q0-1.125 1.1-1.787T18 17t2.9.663T22 19.45V20zm4-4q-.825 0-1.412-.587T16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16"></svg:path>`,
})
export class MaterialSymbolsFolderSupervisedOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
