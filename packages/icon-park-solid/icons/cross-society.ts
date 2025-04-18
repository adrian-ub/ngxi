import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCrossSocietyIcon],svg[icon-park-solid-cross-society-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 18h11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H30v11a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V30H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2"></svg:path>`,
})
export class IconParkSolidCrossSocietyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
