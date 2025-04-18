import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampOutlineIcon],svg[mdi-floor-lamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 2l2 7H7l2-7m4.6 2h-3.2l-.85 3h4.9M11 10h2v10h3v2H8v-2h3Z"></svg:path>`,
})
export class MdiFloorLampOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
