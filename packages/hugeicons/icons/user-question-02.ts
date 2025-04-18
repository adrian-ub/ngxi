import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserQuestion02Icon],svg[hugeicons-user-question-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.981.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M15 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3-1.462C18 4.688 18.672 4 19.5 4s1.5.689 1.5 1.538c0 .307-.087.592-.238.832c-.448.714-1.262 1.396-1.262 2.245V9m0 2h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsUserQuestion02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
