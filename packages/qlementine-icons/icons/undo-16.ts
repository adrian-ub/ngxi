import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsUndo16Icon],svg[qlementine-icons-undo-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.85.854a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0-.147.354a.5.5 0 0 0 .147.354l4 4a.5.5 0 1 0 .708-.708L1.7 4.996h9.29c1.06 0 2.08.421 2.83 1.17a4.004 4.004 0 0 1 0 5.66c-.75.75-1.77 1.17-2.83 1.17h-7.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5h7.5a4.98 4.98 0 0 0 5-5a4.98 4.98 0 0 0-5-5H1.7L4.85.846z"></svg:path>`,
})
export class QlementineIconsUndo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
