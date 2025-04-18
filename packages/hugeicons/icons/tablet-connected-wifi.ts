import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTabletConnectedWifiIcon],svg[hugeicons-tablet-connected-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 18c-.199.69-.5 1.232-.96 1.682C19.698 21 17.536 21 13.212 21h-2.038c-4.324 0-6.486 0-7.83-1.318S2 16.242 2 12s0-6.364 1.343-7.682C4.687 3 6.85 3 11.173 3h2.038c4.324 0 6.486 0 7.83 1.318c.458.45.76.993.959 1.682"></svg:path><svg:path d="M16.992 16H17m5-4.886A6.98 6.98 0 0 0 17 9c-1.953 0-3.72.808-5 2.114m2.5 2.553A3.5 3.5 0 0 1 17 12.61c.976 0 1.86.404 2.5 1.057M6.5 3.5v17"></svg:path></svg:g>`,
})
export class HugeiconsTabletConnectedWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
