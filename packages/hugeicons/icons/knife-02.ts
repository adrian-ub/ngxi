import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKnife02Icon],svg[hugeicons-knife-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.647 17.716c.38-.097.68-.447 1.28-1.149l5.187-6.059c1.91-2.23 2.64-5.348.904-7.969c-.575-.869-1.537-.56-2.138.034L2.574 18.692a1.92 1.92 0 0 0 0 2.74a1.975 1.975 0 0 0 3.005-.276c.946-1.368 2.428-4.885 4.08-5.51c1.712-.65 2.309 2.498 3.988 2.07" color="currentColor"></svg:path>`,
})
export class HugeiconsKnife02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
