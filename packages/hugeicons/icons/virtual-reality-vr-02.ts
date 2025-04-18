import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVirtualRealityVr02Icon],svg[hugeicons-virtual-reality-vr-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 3h-2C6.757 3 4.636 3 3.318 4.318S2 7.758 2 12s0 6.364 1.318 7.682S6.758 21 11 21h2c4.243 0 6.364 0 7.682-1.318S22 16.242 22 12s0-6.364-1.318-7.682S17.242 3 13 3"></svg:path><svg:path d="m11 10l-1.755 3.912C8.92 14.637 8.758 15 8.5 15s-.42-.363-.745-1.088L6 10m8 5v-2m0 0v-2c0-.471 0-.707.146-.854C14.293 10 14.53 10 15 10h1.5a1.5 1.5 0 0 1 0 3M14 13h2.5m0 0l1 2"></svg:path></svg:g>`,
})
export class HugeiconsVirtualRealityVr02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
