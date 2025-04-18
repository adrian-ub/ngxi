import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereVariantOutlineIcon],svg[mdi-floor-lamp-torchiere-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.97 4l-1.29 3h-1.36l-1.29-3zM17 2H7l3 7h4zm-1.08 20L13 15v7h-2v-7l-2.92 7H5.92l5-12h2.16l5 12z"></svg:path>`,
})
export class MdiFloorLampTorchiereVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
