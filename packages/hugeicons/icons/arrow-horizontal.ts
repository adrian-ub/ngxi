import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowHorizontalIcon],svg[hugeicons-arrow-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9c-.607.59-3 2.16-3 3s2.393 2.41 3 3m14-6c.607.59 3 2.16 3 3s-2.393 2.41-3 3M2.423 11.98h19.445" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
