import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchOffIcon],svg[material-symbols-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 22.6l-3.825-3.825l-.975 3.25H9l-1.35-4.55q-1.2-.95-1.925-2.375T5 12q0-.9.225-1.737t.65-1.588L1.4 4.2l1.425-1.425l18.4 18.4zM12 17q.5 0 .95-.088t.875-.262L7.35 10.175q-.175.425-.262.875T7 12q0 2.075 1.463 3.538T12 17m6.175-1.7l-1.5-1.5q.175-.425.25-.862T17 12q0-2.075-1.463-3.537T12 7q-.5 0-.937.075t-.863.25l-2.15-2.15l.95-3.2h6l1.35 4.55q1.2.95 1.925 2.375T19 12q0 .9-.2 1.725t-.625 1.575"></svg:path>`,
})
export class MaterialSymbolsWatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
