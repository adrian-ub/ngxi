import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight01Icon],svg[hugeicons-rotate-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.97 14.812l.65-.393a3 3 0 0 0 1.258-1.41l2.426-5.615a1.6 1.6 0 0 1 .352-.51c.642-.615 1.75-.355 2.289.351c.994 1.303-.342 2.536-.06 3.623l7.755-4.355c1.804-.972 3.361 1.611 1.569 2.804l-4.59 2.55c.883 1.153 3.125 6.746.252 8.452a2.4 2.4 0 0 1-.525.217l-.35.109c-.902.28-2.606.634-3.775.532c-1.216-.106-1.978.542-2.917 1.082m6.344-17.528c-.398.397-2.126.282-2.764.203m2.764-.203c.397-.396.408-2.332.328-2.968m-.328 2.968C13.626 2.95 9.562.123 5.53 2.95C3.58 4.315 3.306 5.176 2.998 5.752" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
