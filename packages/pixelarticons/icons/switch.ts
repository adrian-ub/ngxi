import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSwitchIcon],svg[pixelarticons-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h2v2zm4 2H5V5h2zm2 2H7V7h2zm2 2H9V9h2zm2 0h-2v2h2v2h2v2h2v2h-2v2h6v-6h-2v2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0-2v2h2v2h2V3h-6v2zM5 19v-2h2v2zm0 0v2H3v-2zm2-2v-2h2v2z"></svg:path>`,
})
export class PixelarticonsSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
