import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorLampTorchiereVariantIcon],svg[mdi-floor-lamp-torchiere-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l3 7h4l3-7zm8.92 20L13 15v7h-2v-7l-2.92 7H5.92l5-12h2.16l5 12z"></svg:path>`,
})
export class MdiFloorLampTorchiereVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
