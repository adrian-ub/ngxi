import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDollarCoin1Icon],svg[streamline-dollar-coin-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.806 4.24a1.02 1.02 0 0 0-.961-.68h-.79a.91.91 0 0 0-.194 1.798l1.202.263a1.02 1.02 0 0 1-.218 2.016h-.68a1.02 1.02 0 0 1-.961-.68M8.505 3.56V2.54m0 6.116v-1.02"></svg:path><svg:path d="M3.614 5.598a4.891 4.891 0 1 0 9.782 0a4.891 4.891 0 1 0-9.782 0m-2.411.536a4.89 4.89 0 0 0 6.437 6.73"></svg:path></svg:g>`,
})
export class StreamlineDollarCoin1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
