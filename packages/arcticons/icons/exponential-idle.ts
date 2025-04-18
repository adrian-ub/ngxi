import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExponentialIdleIcon],svg[arcticons-exponential-idle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-3.141 5.948l-7.379 9.777m7.379 0l-7.379-9.777"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.143 33.444c-.933 1.865-3.109 3.108-5.285 3.108h0c-3.419 0-6.217-2.797-6.217-6.217v-4.04c0-3.42 2.798-6.218 6.217-6.218h0c3.42 0 6.217 2.798 6.217 6.217v2.176H12.642"></svg:path>`,
})
export class ArcticonsExponentialIdleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
