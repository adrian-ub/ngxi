import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTicketnuncIcon],svg[arcticons-ticketnunc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.697 28.582H24.65v13.744H6.697zm22.286-.137h12.32V42.5h-12.32zM7.742 5.5h12.474m-6.237 19.19V5.5m12.453 19.303V5.613l12.713 19.19V5.613"></svg:path>`,
})
export class ArcticonsTicketnuncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
