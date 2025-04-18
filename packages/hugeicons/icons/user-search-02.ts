import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSearch02Icon],svg[hugeicons-user-search-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.257.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126c-2.949-1.728-6.69-1.728-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m6.801.8l1.2 1.2m-.6-3.3a2.7 2.7 0 1 0-5.4 0a2.7 2.7 0 0 0 5.4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSearch02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
