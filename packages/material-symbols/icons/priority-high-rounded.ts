import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPriorityHighRoundedIcon],svg[material-symbols-priority-high-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-.825 0-1.412-.587T10 19t.588-1.412T12 17t1.413.588T14 19t-.587 1.413T12 21m0-6q-.825 0-1.412-.587T10 13V5q0-.825.588-1.412T12 3t1.413.588T14 5v8q0 .825-.587 1.413T12 15"></svg:path>`,
})
export class MaterialSymbolsPriorityHighRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
