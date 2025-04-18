import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeStopCircleIcon],svg[prime-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9m0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5"></svg:path><svg:rect width="8" height="8" x="8" y="8" fill="currentColor" rx="1.5"></svg:rect>`,
})
export class PrimeStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
