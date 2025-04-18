import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVynil02Icon],svg[hugeicons-vynil-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.5 12.5c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10c1.169 0 2.29.2 3.333.569"></svg:path><svg:path d="M19.5 9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0V1.5c.333.5.6 2.6 3 3m-9.5 8a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path></svg:g>`,
})
export class HugeiconsVynil02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
