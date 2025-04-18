import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeLeft08Icon],svg[hugeicons-swipe-left-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.008 4.496H21m-5.992 0c0-.7 1.992-2.006 2.497-2.497m-2.497 2.497c0 .7 1.992 2.006 2.497 2.497M6.536 14.446v-4.47m0 0V4.455c0-.82.685-1.482 1.506-1.482c.822 0 1.469.662 1.469 1.482v4.001M6.536 9.977c-1.317 1.192-2.734 2.698-2.925 3.084c-.888 1.35-.795 2.004.195 3.657a41 41 0 0 0 2.037 3.036c.671.76.538.76 1.511 1.474c.87.603 2.673 1.023 6.9.603c3.444-.531 4.27-3.534 4.251-4.97v-3.544c.215-2.946-1.018-3.078-3.256-3.368M9.511 8.455v2.527m0-2.527c.558-.91 2.587-.542 2.982 1.176m.036 1.347V9.977q0-.12-.015-.237m-.02-.109q0 .012.004.022l.016.087m-.02-.109q.005.053.02.11m-.02-.11c-.141-1.197 2.896-.905 3.02 1.2v1.146" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeLeft08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
