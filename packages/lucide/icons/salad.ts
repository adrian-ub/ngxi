import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSaladIcon],svg[lucide-salad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 21h10m-5 0a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9"></svg:path><svg:path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77a2.4 2.4 0 0 1 3.2-2.77a2.4 2.4 0 0 1 3.47-.63a2.4 2.4 0 0 1 3.37 3.37a2.4 2.4 0 0 1-1.1 3.7a2.5 2.5 0 0 1 .03 1.1M13 12l4-4"></svg:path><svg:path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"></svg:path></svg:g>`,
})
export class LucideSaladIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
