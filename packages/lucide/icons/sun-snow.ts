import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSunSnowIcon],svg[lucide-sun-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5l1.25-2.5L18 18M14 4l1.25 2.5L18 6"></svg:path><svg:path d="m17 21l-3-6l1.5-3H22m-5-9l-3 6l1.5 3M2 12h1"></svg:path><svg:path d="m20 10l-1.5 2l1.5 2M3.64 18.36l.7-.7m0-11.32l-.7-.7"></svg:path></svg:g>`,
})
export class LucideSunSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
