import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereOutlineIcon],svg[mdi-floor-lamp-torchiere-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 4l-1.3 3h-1.4L10 4zm3-2H7l3 7h4zm-4 18h3v2H8v-2h3V10h2z"></svg:path>`,
})
export class MdiFloorLampTorchiereOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
