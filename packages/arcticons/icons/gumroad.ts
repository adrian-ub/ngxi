import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGumroadIcon],svg[arcticons-gumroad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M24.418 24.692h10.567v9.741h-4.388l-.03-9.741"></svg:path><svg:path d="M30.569 25.12c0 4.775-2.45 9.88-7.673 9.88s-9.881-3.672-9.881-10.567S17.254 13 24.259 13s10.159 4.358 10.159 7.91h-5.134c0-1.641-1.782-4.09-5.025-4.09S18 19.687 18 24s2.328 7.15 6 7.15s5.85-3.603 5.85-6.459"></svg:path></svg:g>`,
})
export class ArcticonsGumroadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
