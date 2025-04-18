import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsRedo16Icon],svg[qlementine-icons-redo-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1.854a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 .147.354a.5.5 0 0 1-.147.354l-4 4a.5.5 0 1 1-.708-.708l3.15-3.15H4.96c-1.06 0-2.08.421-2.83 1.17a4.004 4.004 0 0 0 0 5.66c.75.75 1.77 1.17 2.83 1.17h7.5a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-7.5c-1.33 0-2.6-.527-3.54-1.46a5.023 5.023 0 0 1 0-7.08a5 5 0 0 1 3.54-1.46h9.29L11.1.846z"></svg:path>`,
})
export class QlementineIconsRedo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
