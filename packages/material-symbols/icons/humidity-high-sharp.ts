import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHumidityHighSharpIcon],svg[material-symbols-humidity-high-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-3.325 0-5.662-2.3Q4 16.4 4 13.125q0-1.65.625-3.063Q5.25 8.65 6.35 7.55L12 2l5.65 5.55q1.1 1.1 1.725 2.512q.625 1.413.625 3.063q0 3.275-2.337 5.575Q15.325 21 12 21Z"></svg:path>`,
})
export class MaterialSymbolsHumidityHighSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
