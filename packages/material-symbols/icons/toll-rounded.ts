import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTollRoundedIcon],svg[material-symbols-toll-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20q-3.35 0-5.675-2.325T7 12t2.325-5.675T15 4t5.675 2.325T23 12t-2.325 5.675T15 20m-9.375-.75q-2.1-.975-3.363-2.925T1 12t1.263-4.325T5.625 4.75q.525-.25.95.038T7 5.725q0 .25-.162.488t-.413.362q-1.575.725-2.5 2.188T3 12t.925 3.238t2.5 2.187q.25.125.413.35t.162.5q0 .625-.425.925t-.95.05"></svg:path>`,
})
export class MaterialSymbolsTollRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
