import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLandRowsVerticalIcon],svg[mdi-land-rows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6.5 20H4V4h2.5zm4.5 0H8.5V4H11zm4.5 0H13V4h2.5zm4.5 0h-2.5V4H20z"></svg:path>`,
})
export class MdiLandRowsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
