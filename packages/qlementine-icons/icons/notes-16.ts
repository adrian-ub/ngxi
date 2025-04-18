import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsNotes16Icon],svg[qlementine-icons-notes-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.9v8.3a2.43 2.43 0 0 0-1.25-.197c-1.36.116-2.75.975-2.75 2.19c0 1.22 1.11 2.08 2.75 1.71c1.48-.34 2.12-1.04 2.23-1.91h.017v-7.1l8-.8v5.11a2.43 2.43 0 0 0-1.25-.197c-1.36.116-2.75.975-2.75 2.19c0 1.22 1.11 2.08 2.75 1.71c1.48-.34 2.12-1.04 2.23-1.91h.017v-10A.905.905 0 0 0 13 .095l-8.1.81A1 1 0 0 0 4 1.9m9-.805l-8.01.801q.01.048.01.099v1.9l8-.8z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsNotes16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
