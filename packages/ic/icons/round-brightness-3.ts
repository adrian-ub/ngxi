import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBrightness3Icon],svg[ic-round-brightness-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.93 2h-.14c-.83.02-1.09 1.12-.39 1.56A10 10 0 0 1 13.03 12c0 3.55-1.84 6.66-4.62 8.43c-.71.46-.43 1.55.41 1.57h.21c6.05 0 10.86-5.39 9.87-11.63c-.76-4.84-5.07-8.42-9.97-8.37"></svg:path>`,
})
export class IcRoundBrightness3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
