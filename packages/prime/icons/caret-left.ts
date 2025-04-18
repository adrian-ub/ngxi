import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCaretLeftIcon],svg[prime-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18.75a.74.74 0 0 1-.45-.15l-8-6a.75.75 0 0 1 0-1.2l8-6a.75.75 0 0 1 .79-.07a.76.76 0 0 1 .41.67v12a.76.76 0 0 1-.41.67a.8.8 0 0 1-.34.08M9.25 12l6 4.5v-9Z"></svg:path>`,
})
export class PrimeCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
