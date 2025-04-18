import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGhostIcon],svg[arcticons-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.31 5.5h19a1.63 1.63 0 0 1 1.59 1.63v4.4a1.63 1.63 0 0 1-1.64 1.64h-19a1.63 1.63 0 0 1-1.64-1.64v-4.4A1.63 1.63 0 0 1 7.31 5.5m29.15 0h4.23a1.63 1.63 0 0 1 1.64 1.63v4.4a1.63 1.63 0 0 1-1.64 1.64h-4.23a1.63 1.63 0 0 1-1.64-1.64v-4.4a1.63 1.63 0 0 1 1.64-1.63M7.31 20.16h33.38a1.63 1.63 0 0 1 1.64 1.64v4.4a1.64 1.64 0 0 1-1.64 1.64H7.31a1.63 1.63 0 0 1-1.64-1.64v-4.4a1.63 1.63 0 0 1 1.64-1.64m0 14.66h11.94a1.64 1.64 0 0 1 1.64 1.64v4.41a1.63 1.63 0 0 1-1.64 1.63H7.31a1.62 1.62 0 0 1-1.64-1.63v-4.41a1.64 1.64 0 0 1 1.64-1.64m21.44 0h11.94a1.64 1.64 0 0 1 1.64 1.64v4.41a1.63 1.63 0 0 1-1.64 1.63H28.75a1.62 1.62 0 0 1-1.64-1.63v-4.41a1.64 1.64 0 0 1 1.64-1.64m0 0"></svg:path>`,
})
export class ArcticonsGhostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
