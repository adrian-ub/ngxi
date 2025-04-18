import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBwMobilbankingIcon],svg[arcticons-bw-mobilbanking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.803 19l-2.5 10l-2.5-10l-2.5 10l-2.5-10m12.279 5h8.75m-8.75-5h8.75m0 10h-8.75m-16.789-5a2.5 2.5 0 0 1 0 5H9.168V19h4.125a2.5 2.5 0 0 1 0 5m0 0H9.168"></svg:path>`,
})
export class ArcticonsBwMobilbankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
