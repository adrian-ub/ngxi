import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroCircleIcon],svg[hugeicons-euro-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M15 14.492c-.478.904-1.349 1.508-2.343 1.508c-1.51 0-2.734-1.393-2.734-3.111V11.11c0-1.717 1.224-3.11 2.734-3.11c.994 0 1.865.604 2.343 1.508M9 12h3.923"></svg:path></svg:g>`,
})
export class HugeiconsEuroCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
