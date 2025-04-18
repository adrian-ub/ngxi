import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMelvoridleIcon],svg[arcticons-melvoridle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.5a2 2 0 0 0-2 2v27a2 2 0 0 0 2 2h9.56V26.307l8.21 8.218l8.21-8.218V39.5h9.02a2 2 0 0 0 2-2v-27a2 2 0 0 0-2-2H30.873L24 16.404L17.127 8.5Zm17.36 7.9l.28 17.317"></svg:path>`,
})
export class ArcticonsMelvoridleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
