import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGameController03Icon],svg[hugeicons-game-controller-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.008 15.81c.223-3.494.88-6.05 1.435-7.535c.281-.75.885-1.308 1.658-1.495c4.3-1.04 9.498-1.04 13.798 0c.773.187 1.377.745 1.658 1.495c.556 1.485 1.212 4.041 1.435 7.534c.133 2.09-1.377 3.241-3.05 4.083c-1.064.537-1.883-1.046-2.427-2.272a1.82 1.82 0 0 0-1.687-1.084H9.172c-.739 0-1.39.415-1.687 1.084c-.544 1.226-1.363 2.809-2.428 2.272c-1.655-.833-3.183-1.976-3.049-4.083M5 4.5L6.963 4M19 4.5L17 4m-8 9l-1.5-1.5m0 0L6 10m1.5 1.5L6 13m1.5-1.5L9 10m6.988 0h.01m1.99 3h.01" color="currentColor"></svg:path>`,
})
export class HugeiconsGameController03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
