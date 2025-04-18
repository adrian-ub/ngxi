import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSpinnerDottedIcon],svg[prime-spinner-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m16 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-8 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M5.283 7.404a1.5 1.5 0 1 0 2.121-2.121a1.5 1.5 0 0 0-2.121 2.121m13.434 11.313a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.121m-13.434 0a1.5 1.5 0 1 0 2.121-2.121a1.5 1.5 0 0 0-2.121 2.121" clip-rule="evenodd"></svg:path>`,
})
export class PrimeSpinnerDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
