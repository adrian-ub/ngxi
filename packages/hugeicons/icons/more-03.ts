import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMore03Icon],svg[hugeicons-more-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:rect width="3" height="3" x="18" y="18" rx="1"></svg:rect><svg:rect width="3" height="3" x="18" y="10.5" rx="1"></svg:rect><svg:rect width="3" height="3" x="18" y="3" rx="1"></svg:rect><svg:rect width="3" height="3" x="10.5" y="18" rx="1"></svg:rect><svg:rect width="3" height="3" x="10.5" y="10.5" rx="1"></svg:rect><svg:rect width="3" height="3" x="10.5" y="3" rx="1"></svg:rect><svg:rect width="3" height="3" x="3" y="18" rx="1"></svg:rect><svg:rect width="3" height="3" x="3" y="10.5" rx="1"></svg:rect><svg:rect width="3" height="3" x="3" y="3" rx="1"></svg:rect></svg:g>`,
})
export class HugeiconsMore03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
