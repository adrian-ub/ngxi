import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereIcon],svg[mdi-floor-lamp-torchiere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l3 7h4l3-7zm6 18h3v2H8v-2h3V10h2z"></svg:path>`,
})
export class MdiFloorLampTorchiereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
