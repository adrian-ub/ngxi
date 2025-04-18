import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLightbulbIcon],svg[pixelarticons-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v2H8zM6 6V4h2v2zm0 6H4V6h2zm2 2H6v-2h2zm8 0v4H8v-4h2v2h4v-2zm2-2v2h-2v-2zm0-6h2v6h-2zm0 0V4h-2v2zm-2 14H8v2h8z"></svg:path>`,
})
export class PixelarticonsLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
