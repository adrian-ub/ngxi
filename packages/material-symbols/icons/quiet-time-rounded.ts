import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsQuietTimeRoundedIcon],svg[material-symbols-quiet-time-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.1 23q-2.1 0-3.937-.8t-3.2-2.163Q4.6 18.675 3.8 16.837T3 12.9q0-3.2 1.8-5.8t4.825-3.65q.55-.2 1.025.137t.45.913q-.075 2.125.675 4.05t2.25 3.425q1.5 1.5 3.425 2.25t4.05.675q.575-.025.938.388t.187.912q-1.05 3.075-3.663 4.938T13.1 23Z"></svg:path>`,
})
export class MaterialSymbolsQuietTimeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
