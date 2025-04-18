import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFusionBlenderIcon],svg[carbon-fusion-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 12h-3V4h3V2h-8v2h3v8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v8h-3v2h8v-2h-3v-8h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-8 6v-4h8v4z" fill="currentColor"></svg:path>`,
})
export class CarbonFusionBlenderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
