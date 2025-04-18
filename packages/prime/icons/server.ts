import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeServerIcon],svg[prime-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 8.5v-3a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1a1 1 0 0 0 1-1m-1 10h-15v-3h15Zm0-5h-15v-3h15Zm0-5h-15v-3h15Z"></svg:path><svg:circle cx="6.25" cy="7" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.75" cy="7" r=".75" fill="currentColor"></svg:circle><svg:circle cx="6.25" cy="12" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.75" cy="12" r=".75" fill="currentColor"></svg:circle><svg:circle cx="6.25" cy="17" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.75" cy="17" r=".75" fill="currentColor"></svg:circle>`,
})
export class PrimeServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
