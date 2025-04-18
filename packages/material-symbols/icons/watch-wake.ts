import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWatchWakeIcon],svg[material-symbols-watch-wake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17v-2h2v2zm0-4v-2h3v2zm0-4V6.975h4V9zM7 22l-1.35-4.55q-1.2-.95-1.925-2.375T3 12t.725-3.075T5.65 6.55L7 2h6l1.35 4.55q1.2.95 1.925 2.375T17 12t-.725 3.075t-1.925 2.375L13 22zm3-5q2.075 0 3.538-1.463T15 12t-1.463-3.537T10 7T6.463 8.463T5 12t1.463 3.538T10 17"></svg:path>`,
})
export class MaterialSymbolsWatchWakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
