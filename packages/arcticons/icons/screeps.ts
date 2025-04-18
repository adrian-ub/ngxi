import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreepsIcon],svg[arcticons-screeps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 35.48L14.78 24L4.5 12.51h7.09L21.88 24L11.59 35.48Zm35.51 0H25.13a3.2 3.2 0 0 1 0-6.38H40a3.2 3.2 0 1 1 .57 6.38a5 5 0 0 1-.57 0Z"></svg:path>`,
})
export class ArcticonsScreepsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
