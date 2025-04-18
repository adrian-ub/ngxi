import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComingSoon02Icon],svg[hugeicons-coming-soon-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 13.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0"></svg:path><svg:path d="M12 19a5.5 5.5 0 1 1 0-11m1.5-4.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-1.5 10L15 9"></svg:path></svg:g>`,
})
export class HugeiconsComingSoon02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
