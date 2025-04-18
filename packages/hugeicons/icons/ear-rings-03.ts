import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarRings03Icon],svg[hugeicons-ear-rings-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="7" r="4"></svg:circle><svg:circle cx="7" cy="17" r="4"></svg:circle><svg:path d="M13 7H3m18 10H11M5 4.5c.275-1.572 3 .924 3 2.5s-2.725 4.072-3 2.5m14 5c-.275-1.572-3 .924-3 2.5s2.725 4.072 3 2.5"></svg:path></svg:g>`,
})
export class HugeiconsEarRings03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
