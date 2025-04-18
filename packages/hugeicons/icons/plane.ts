import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlaneIcon],svg[hugeicons-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9c-3.102 0-4.224 2.603-4.86 5.237c-.808 3.342 2.036 4.857 4.86 4.759c2.824.098 5.668-1.417 4.86-4.759C16.225 11.603 15.103 9 12 9m0 5h.009M4 21h.009M20 21h.009M7 15l-5 2m15-2l5 2M12 9V3M4 18v-1.5M20 18v-1.5" color="currentColor"></svg:path>`,
})
export class HugeiconsPlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
