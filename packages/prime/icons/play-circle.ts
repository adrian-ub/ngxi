import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primePlayCircleIcon],svg[prime-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 12a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18m-2 12.586c0 .89 1.077 1.337 1.707.707l3.586-3.586a1 1 0 0 0 0-1.414l-3.586-3.586c-.63-.63-1.707-.184-1.707.707z" clip-rule="evenodd"></svg:path>`,
})
export class PrimePlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
