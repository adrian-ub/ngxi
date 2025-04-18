import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStethoscopeLightIcon],svg[lets-icons-stethoscope-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="18.5" cy="10.5" r="2" stroke="currentColor"></svg:circle><svg:circle cx="18.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="8.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M8.5 13.5c3.594 0 4.766-4.842 4.967-8.002c.035-.551-.415-.998-.967-.998h-1m-3 9c-3.593 0-4.766-4.842-4.967-8.002c-.035-.551.415-.998.967-.998h1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M18.5 12.5v2a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v-1"></svg:path></svg:g>`,
})
export class LetsIconsStethoscopeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
