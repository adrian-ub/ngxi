import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStrategyTasksSolidIcon],svg[streamline-strategy-tasks-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0a1 1 0 0 0-1 1v.506a1 1 0 0 0 1 .994h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-2 1H3a1.5 1.5 0 0 0-1.5 1.5v10A1.5 1.5 0 0 0 3 14h8a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11 1h-.5v.5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm1.037 5.569a.76.76 0 1 1 1.518 0a.76.76 0 0 1-1.518 0m.759-2.01a2.01 2.01 0 1 0 0 4.02a2.01 2.01 0 0 0 0-4.02m5.1 4.332a.625.625 0 0 1 0 .884l-.81.809l.808.807a.625.625 0 1 1-.884.884l-.807-.808l-.807.808a.625.625 0 1 1-.884-.884l.807-.807l-.809-.81a.625.625 0 1 1 .884-.883l.809.809l.809-.81a.625.625 0 0 1 .884 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineStrategyTasksSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
