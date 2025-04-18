import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStepOutIcon],svg[hugeicons-step-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18 10l1.84-1.586C20.613 7.748 21 7.414 21 7s-.387-.748-1.16-1.414L18 4"></svg:path><svg:path d="M12 18v-3c0-3.771 0-5.657 1.172-6.828S16.229 7 20 7h1M3 21h6m6 0h6"></svg:path></svg:g>`,
})
export class HugeiconsStepOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
