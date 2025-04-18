import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwapcardIcon],svg[arcticons-swapcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.32 20.648l-1.601-1.911h0a8.613 8.613 0 1 0 0 10.527h0l8.816-10.527h0a8.615 8.615 0 0 1 14.754 1.91"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.935 27.353l1.6 1.91h0a8.615 8.615 0 0 0 14.735-1.868"></svg:path>`,
})
export class ArcticonsSwapcardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
