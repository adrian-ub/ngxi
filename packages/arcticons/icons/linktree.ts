import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinktreeIcon],svg[arcticons-linktree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.126 20.084h31.748M12.775 8.859l22.45 22.45m-22.45 0l22.45-22.45M24 20.098V4.21m.002 25.942V43.5"></svg:path>`,
})
export class ArcticonsLinktreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
