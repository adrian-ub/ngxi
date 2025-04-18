import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoodLockIcon],svg[arcticons-good-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M5.5 24h37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 34.31h-.1a4.502 4.502 0 0 1-8.9-.944a4.5 4.5 0 0 1 8.9-.945h.1M24 42.5v-8.189m0-1.891V24m0-10.31h.1a4.502 4.502 0 0 1 8.9.944a4.5 4.5 0 0 1-8.9.945H24M24 5.5v8.189m0 1.89V24"></svg:path>`,
})
export class ArcticonsGoodLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
