import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLightbulbOnIcon],svg[pixelarticons-lightbulb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v4h2zm2 6H9v2H7v4h2v4h6v-4h2v-4h-2zm0 2v4h-2v2h-2v-2H9v-4zM9 20h6v2H9zm14-9v2h-4v-2zM5 13v-2H1v2zm12-7h2v2h-2zm2 0h2V4h-2zM5 6h2v2H5zm0 0V4H3v2z"></svg:path>`,
})
export class PixelarticonsLightbulbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
