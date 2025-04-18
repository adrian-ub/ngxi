import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGhostcommanderAltIcon],svg[arcticons-ghostcommander-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.66 16.83a2.78 2.78 0 0 1 2.79 2.78v9.86a2.79 2.79 0 0 1-5.57 0v-9.86a2.77 2.77 0 0 1 2.78-2.78m26.68 0a2.77 2.77 0 0 1 2.78 2.78v9.86a2.79 2.79 0 0 1-5.57 0v-9.86a2.78 2.78 0 0 1 2.79-2.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 6.82a10.55 10.55 0 0 0-10.55 10.55v16.12a2 2 0 0 0 2 2h17.1a2 2 0 0 0 2-2V17.37A10.55 10.55 0 0 0 24 6.82M22.84 35.5v5.22a2.79 2.79 0 0 1-2.78 2.78h0a2.8 2.8 0 0 1-2.79-2.78V35.5m13.46 0v5.22a2.8 2.8 0 0 1-2.79 2.78h0a2.79 2.79 0 0 1-2.78-2.78V35.5m-7.89 0h13.46m-13.64-31l1.92 3.57m11.9-3.57l-2.02 3.52"></svg:path>`,
})
export class ArcticonsGhostcommanderAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
