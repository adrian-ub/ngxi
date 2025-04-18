import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChampagnePartyAlcoholIcon],svg[streamline-champagne-party-alcohol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.179 6.011L4.114.881l3.653 1.04l-1.062 5.38a2.362 2.362 0 1 1-4.526-1.29m1.563 3.104l-1.074 3.766m-1.484-.424l2.967.846"></svg:path><svg:path d="m3.148 3.438l4.086 1.175"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.567 8.963a2.362 2.362 0 0 0 3.255-2.952L9.885.881l-.576.163m.949 8.071l1.074 3.766m1.484-.424l-2.967.846m1.003-9.853l-1.669.48"></svg:path></svg:g>`,
})
export class StreamlineChampagnePartyAlcoholIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
