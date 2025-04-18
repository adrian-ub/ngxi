import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsHeartFilledIcon],svg[radix-icons-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.352 4.905a3.547 3.547 0 0 1 3.541-3.553c1.365 0 1.968.571 2.607 1.583c.64-1.012 1.242-1.583 2.607-1.583a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064c-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsHeartFilledIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
