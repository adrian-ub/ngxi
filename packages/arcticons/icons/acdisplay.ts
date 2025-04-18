import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAcdisplayIcon],svg[arcticons-acdisplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.86 4.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27.2a2 2 0 0 0 2-2V30.83h-2.92v7.79H8.79V9.38h25.35v1.95h2.92V6.5a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.31 14.25a6.82 6.82 0 0 0-6.82 6.83v6.82h6.82a6.83 6.83 0 1 0 0-13.65"></svg:path>`,
})
export class ArcticonsAcdisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
