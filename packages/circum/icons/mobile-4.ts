import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMobile4Icon],svg[circum-mobile-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.003" cy="18.937" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.725 2.065h-9.45a2.386 2.386 0 0 0-2.24 2.5v14.87a2.386 2.386 0 0 0 2.24 2.5h9.45a2.38 2.38 0 0 0 2.24-2.5V4.565a2.38 2.38 0 0 0-2.24-2.5m1.24 17.37a1.384 1.384 0 0 1-1.24 1.5h-9.45a1.39 1.39 0 0 1-1.24-1.5v-2.5h11.93Zm0-3.5H6.035V4.565a1.39 1.39 0 0 1 1.24-1.5h9.45a1.384 1.384 0 0 1 1.24 1.5Z"></svg:path>`,
})
export class CircumMobile4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
