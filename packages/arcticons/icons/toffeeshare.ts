import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsToffeeshareIcon],svg[arcticons-toffeeshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.209 15.858l-7.362 9.067m16.754-9.067l-13.194 16.25m16.754-9.066L26.8 32.109"></svg:path><svg:rect width="20.314" height="16.251" x="13.847" y="15.858" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.047" ry="3.047"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.839 19.36l-2.422-4.56a3.005 3.005 0 0 0-5.306 2.822l1.343 2.125l-2.04 2.04a3.12 3.12 0 0 0 0 4.415l2.049 2.05l-1.344 2.126a3.005 3.005 0 0 0 5.306 2.822l2.414-4.56m20.322-9.28l2.422-4.56a3.005 3.005 0 0 1 5.306 2.822l-1.343 2.125l2.04 2.04a3.12 3.12 0 0 1 0 4.415l-2.049 2.05l1.344 2.126a3.005 3.005 0 0 1-5.306 2.822l-2.414-4.56"></svg:path>`,
})
export class ArcticonsToffeeshareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
