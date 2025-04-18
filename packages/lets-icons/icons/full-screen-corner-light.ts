import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFullScreenCornerLightIcon],svg[lets-icons-full-screen-corner-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h-.5v.5H4zm5.354-4.646a.5.5 0 0 0-.708-.708zM3.5 14v6h1v-6zm.5 6.5h6v-1H4zm.354-.146l5-5l-.708-.708l-5 5zM20 4h.5v-.5H20zm-5.354 4.646a.5.5 0 0 0 .708.708zM20.5 10V4h-1v6zM20 3.5h-6v1h6zm-.354.146l-5 5l.708.708l5-5z"></svg:path>`,
})
export class LetsIconsFullScreenCornerLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
