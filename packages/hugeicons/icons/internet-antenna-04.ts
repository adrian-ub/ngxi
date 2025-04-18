import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInternetAntenna04Icon],svg[hugeicons-internet-antenna-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2.959-3C17.619 5.87 18 6.898 18 8s-.381 2.13-1.041 3M7.04 5C6.381 5.87 6 6.898 6 8s.381 2.13 1.041 3m13.275-8C21.38 4.43 22 6.15 22 8s-.62 3.57-1.684 5M3.684 3C2.62 4.43 2 6.15 2 8s.62 3.57 1.684 5M11 10L7 21m10 0l-4-11m-4.5 7h7" color="currentColor"></svg:path>`,
})
export class HugeiconsInternetAntenna04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
