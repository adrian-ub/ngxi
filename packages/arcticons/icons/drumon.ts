import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDrumonIcon],svg[arcticons-drumon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.8 23.1l38.7-12.4v-.5l-17.9.7c-3.8-2.2-5.1-.6-6 1.8l-15 9.8ZM23.15 40V21.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.68 17.67l.21 2.27l1.26 1.24l1.42-1.52l.2-2.96m-4.86-8.11l2.4-.92m-.19 3.45l-1.01-2.99"></svg:path>`,
})
export class ArcticonsDrumonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
