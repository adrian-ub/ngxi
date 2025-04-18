import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAstronaut02Icon],svg[hugeicons-astronaut-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="10" r="7"></svg:circle><svg:ellipse cx="12" cy="10" rx="4" ry="3"></svg:ellipse><svg:path d="M5 13a3 3 0 0 1-3-3c0-1.657 0-3 3-3m14 6a3 3 0 0 0 3-3c0-1.657 0-3-3-3m1.5 0V3M18 21a1 1 0 0 0 1-1a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3a1 1 0 0 0 1 1z"></svg:path></svg:g>`,
})
export class HugeiconsAstronaut02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
