import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsByuIcon],svg[arcticons-byu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.124 18.5L23.481 24l-3.644-5.5m3.644 11V24m6.66-5.5v7.356a3.644 3.644 0 0 0 7.288 0V18.5M15.109 24a2.75 2.75 0 1 1 0 5.5H10.57v-11h4.538a2.75 2.75 0 1 1 0 5.5m.001 0h-4.538"></svg:path>`,
})
export class ArcticonsByuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
