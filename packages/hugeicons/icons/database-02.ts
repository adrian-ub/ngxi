import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabase02Icon],svg[hugeicons-database-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3"></svg:path><svg:path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5m4 3v2m0 5v2"></svg:path></svg:g>`,
})
export class HugeiconsDatabase02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
