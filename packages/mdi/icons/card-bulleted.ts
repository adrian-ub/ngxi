import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardBulletedIcon],svg[mdi-card-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-9 9H9v2h2zm8 0h-6v2h6zM7 9H5v2h2zm12 0H9v2h10z"></svg:path>`,
})
export class MdiCardBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
