import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBunqIcon],svg[arcticons-bunq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.488 20.571v4.27a2.59 2.59 0 0 0 2.588 2.588h0a2.59 2.59 0 0 0 2.588-2.588v-4.27m7.927 6.858v-4.27a2.59 2.59 0 0 0-2.588-2.588h0a2.59 2.59 0 0 0-2.588 2.588v4.27M9.5 23.159a2.59 2.59 0 0 1 2.588-2.588h0a2.59 2.59 0 0 1 2.588 2.588v1.682a2.59 2.59 0 0 1-2.588 2.588h0A2.59 2.59 0 0 1 9.5 24.841m0 2.588V17.077m29 7.764a2.59 2.59 0 0 1-2.588 2.588h0a2.59 2.59 0 0 1-2.588-2.588V23.16a2.59 2.59 0 0 1 2.588-2.588h0A2.59 2.59 0 0 1 38.5 23.16m0-2.589v10.352"></svg:path>`,
})
export class ArcticonsBunqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
