import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewObjectTrackOutlineIcon],svg[material-symbols-view-object-track-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 20q-1.45 0-2.475-1.025T4 16.5t1.025-2.475T7.5 13h11q1.45 0 2.475 1.025T22 16.5t-1.025 2.475T18.5 20zm0-2h11q.625 0 1.063-.437T20 16.5t-.437-1.062T18.5 15h-11q-.625 0-1.062.438T6 16.5t.438 1.063T7.5 18m-2-7q-1.45 0-2.475-1.025T2 7.5t1.025-2.475T5.5 4h11q1.45 0 2.475 1.025T20 7.5t-1.025 2.475T16.5 11zm0-2h11q.625 0 1.063-.437T18 7.5t-.437-1.062T16.5 6h-11q-.625 0-1.062.438T4 7.5t.438 1.063T5.5 9M11 7.5"></svg:path>`,
})
export class MaterialSymbolsViewObjectTrackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
