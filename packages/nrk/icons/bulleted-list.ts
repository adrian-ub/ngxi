import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkBulletedListIcon],svg[nrk-bulleted-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11h16v2H6zm16 6H6v2h16zM6 5h16v2H6zm-4 6h2v2H2zm2 6H2v2h2zM2 5h2v2H2z"></svg:path>`,
})
export class NrkBulletedListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
