import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLandRowsHorizontalIcon],svg[mdi-land-rows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2M4 6.5V4h16v2.5zM4 11V8.5h16V11zm0 4.5V13h16v2.5zM4 20v-2.5h16V20z"></svg:path>`,
})
export class MdiLandRowsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
