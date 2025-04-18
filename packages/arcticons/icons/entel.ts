import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEntelIcon],svg[arcticons-entel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.629 30.077c-1.105 2.21-3.684 3.684-6.262 3.684c-4.052 0-7.367-3.315-7.367-7.367v-4.788c0-4.052 3.315-7.367 7.367-7.367s7.367 3.315 7.367 7.367v2.578H13M31.513 16.6C33.647 18.39 35 21.043 35 24s-1.353 5.61-3.487 7.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4"></svg:path>`,
})
export class ArcticonsEntelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
