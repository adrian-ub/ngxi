import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGiftIcon],svg[charm-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 4.75h12.5v3.5H1.75z"></svg:path><svg:path d="M10.25 4.75H8c0-2 .5-3 2.25-3c2 0 2 3 0 3m-4.5 0H8c0-2-.5-3-2.25-3c-2 0-2 3 0 3m2.25 9V5M2.75 8.75v5.5h10.5v-5.5"></svg:path></svg:g>`,
})
export class CharmGiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
