import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLapsIcon],svg[material-symbols-laps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 21l-1.425-1.4l1.6-1.6H9q-2.925 0-4.962-2.037T2 11t2.038-4.962T9 4h6q2.925 0 4.963 2.038T22 11t-2.037 4.963T15 18v-2q2.075 0 3.538-1.463T20 11t-1.463-3.537T15 6H9Q6.925 6 5.463 7.463T4 11t1.463 3.563T9 16.2h.4l-1.8-1.8L9 13l4 4z"></svg:path>`,
})
export class MaterialSymbolsLapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
