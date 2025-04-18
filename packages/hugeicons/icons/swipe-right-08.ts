import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeRight08Icon],svg[hugeicons-swipe-right-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.998 4.495h-5.99m5.99 0c0-.7-1.99-2.006-2.496-2.497m2.496 2.497c0 .7-1.99 2.007-2.496 2.498M6.537 14.446v-4.47m0 0V4.453c0-.82.685-1.482 1.506-1.482s1.469.662 1.469 1.482v4.002M6.537 9.976c-1.316 1.193-2.733 2.699-2.924 3.085c-.888 1.35-.795 2.004.194 3.657a41 41 0 0 0 2.037 3.036c.672.76.538.761 1.511 1.475c.87.603 2.672 1.023 6.899.603c3.443-.532 4.268-3.535 4.25-4.97v-3.545c.214-2.946-1.018-3.079-3.255-3.369M9.512 8.455v2.527m0-2.527c.558-.91 2.586-.542 2.981 1.176m.036 1.347V9.976q0-.119-.015-.236m-.021-.11l.02.11m-.02-.11q.005.053.02.11m-.02-.11c-.14-1.197 2.896-.905 3.02 1.201v1.145" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeRight08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
