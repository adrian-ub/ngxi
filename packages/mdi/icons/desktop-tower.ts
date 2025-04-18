import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDesktopTowerIcon],svg[mdi-desktop-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v2h8V4zm8 4H8v2h8zm0 10h-2v2h2z"></svg:path>`,
})
export class MdiDesktopTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
