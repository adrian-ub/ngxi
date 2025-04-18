import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightCropIcon],svg[mdi-light-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h7a3 3 0 0 1 3 3v7h-1V9a2 2 0 0 0-2-2H8zm0 13a3 3 0 0 1-3-3V7H1V6h4V2h1v14a2 2 0 0 0 2 2h13v1h-3v4h-1v-4z"></svg:path>`,
})
export class MdiLightCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
