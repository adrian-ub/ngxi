import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOrbit02Icon],svg[hugeicons-orbit-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M2.964 16.289A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-4-.832m-5.036-4.879A1.999 1.999 0 0 0 4 20c.522 0 .998-.2 1.354-.528a2 2 0 0 0-2.39-3.183"></svg:path><svg:path d="M16.328 14.505a2 2 0 0 0-3.136 2.352m3.136-2.352a2 2 0 1 1-3.136 2.352m3.136-2.352A5 5 0 0 0 17 12c0-.91-.244-1.765-.669-2.5m-3.139 7.357A5 5 0 0 1 7.67 9.5"></svg:path></svg:g>`,
})
export class HugeiconsOrbit02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
