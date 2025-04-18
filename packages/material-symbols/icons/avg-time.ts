import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAvgTimeIcon],svg[material-symbols-avg-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3V1h6v2zm1 11.75l-1.1-2.2q-.125-.275-.375-.413T8 12H3.05q.375-3.375 2.925-5.687T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4q.8 1.05 1.275 2.213T20.95 12h-4.325L14.9 8.55q-.275-.575-.9-.575t-.9.575zM12 22q-3.475 0-6.025-2.312T3.05 14h4.325L9.1 17.45q.275.575.9.575t.9-.575l3.1-6.2l1.1 2.2q.125.275.375.413T16 14h4.95q-.375 3.375-2.925 5.687T12 22"></svg:path>`,
})
export class MaterialSymbolsAvgTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
