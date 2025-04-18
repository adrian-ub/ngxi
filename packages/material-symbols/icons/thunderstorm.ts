import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThunderstormIcon],svg[material-symbols-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 23l.9-2.5H6.5L7.75 17h2.5l-1.075 2.5h2.075L8.5 23zm6.75-1l.7-2H13l1.075-3h2.5l-.875 2h2.05l-2.5 3zM7.5 16q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z"></svg:path>`,
})
export class MaterialSymbolsThunderstormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
