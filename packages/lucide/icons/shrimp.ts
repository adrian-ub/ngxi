import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideShrimpIcon],svg[lucide-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 12h.01M13 22c.5-.5 1.12-1 2.5-1c-1.38 0-2-.5-2.5-1m1-18a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13a1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"></svg:path><svg:path d="M14 8a8.5 8.5 0 0 1 0 8m2 0c2 0 4.5-4 4-6"></svg:path></svg:g>`,
})
export class LucideShrimpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
