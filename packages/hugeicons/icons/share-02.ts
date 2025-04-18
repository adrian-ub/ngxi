import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare02Icon],svg[hugeicons-share-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 4.5c-3.496 1.201-6 4.442-6 8.251c0 1.207.251 2.357.706 3.402M15 4.5c3.496 1.201 6 4.442 6 8.251c0 1.023-.18 2.004-.512 2.916M16.5 20.33A9.16 9.16 0 0 1 12 21.5a9.16 9.16 0 0 1-4.5-1.17M15 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:circle cx="5" cy="19" r="3"></svg:circle><svg:circle cx="19" cy="19" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsShare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
