import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrolley02Icon],svg[hugeicons-trolley-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 2h1.301c1.186 0 1.779 0 2.18.371c.402.372.48.992.637 2.233l1.128 8.925c.209 1.654.313 2.48.849 2.976c.536.495 1.326.495 2.907.495H22"></svg:path><svg:circle cx="11.5" cy="19.5" r="1.5"></svg:circle><svg:circle cx="18.5" cy="19.5" r="1.5"></svg:circle><svg:path d="M18 14h-2c-1.886 0-2.828 0-3.414-.586S12 11.886 12 10V8c0-1.886 0-2.828.586-3.414S14.114 4 16 4h2c1.886 0 2.828 0 3.414.586S22 6.114 22 8v2c0 1.886 0 2.828-.586 3.414S19.886 14 18 14m-1.5-7h1"></svg:path></svg:g>`,
})
export class HugeiconsTrolley02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
