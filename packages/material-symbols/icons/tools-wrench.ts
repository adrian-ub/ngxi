import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsToolsWrenchIcon],svg[material-symbols-tools-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.875 21.225l-6.9-6.9q-.575.225-1.187.35t-1.263.125q-2.725 0-4.612-1.888T2.025 8.3q0-1.05.313-2.025t.912-1.8L7.075 8.3L8.5 6.9L4.675 3.05q.85-.625 1.825-.937t2-.313q2.725 0 4.612 1.888T15 8.3q0 .65-.125 1.288T14.5 10.8l6.875 6.875q.575.575.588 1.413T21.4 20.5l-.675.7q-.575.6-1.413.613t-1.437-.588Z"></svg:path>`,
})
export class MaterialSymbolsToolsWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
