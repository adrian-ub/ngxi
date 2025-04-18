import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEnkiIcon],svg[arcticons-enki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.337 21.878L4.5 25.592l5.837 3.714m27.326-7.428l5.837 3.714l-5.837 3.714m-8.224 3.184l5.837-16.98M24.728 29.07a4.96 4.96 0 0 1-4.31 2.502h0a4.96 4.96 0 0 1-4.96-4.96v-3.224a4.96 4.96 0 0 1 4.96-4.96h0a4.96 4.96 0 0 1 4.96 4.96V25h-9.92"></svg:path>`,
})
export class ArcticonsEnkiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
