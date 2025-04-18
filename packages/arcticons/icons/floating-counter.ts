import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFloatingCounterIcon],svg[arcticons-floating-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.815 32.028a5.32 5.32 0 0 1-4.627 2.702h0c-2.943 0-5.329-2.402-5.329-5.365v-3.488c0-2.963 2.386-5.365 5.329-5.365h0a5.32 5.32 0 0 1 4.622 2.693M16.345 34.731V17.025c0-2.074 1.67-3.756 3.73-3.756h0c1.836 0 2.982.548 3.768 1.572m-10.658 5.672h7.46"></svg:path>`,
})
export class ArcticonsFloatingCounterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
