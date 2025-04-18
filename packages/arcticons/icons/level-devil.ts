import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLevelDevilIcon],svg[arcticons-level-devil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.01 5.5v9.336h-6.53v13.696h3.062v5.927H8.917v6.506h14.647v-3.131h9.439V42.5h6.08V31.389h-6.286V14.836H29.37V5.5z"></svg:path>`,
})
export class ArcticonsLevelDevilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
