import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBatteryFullIcon],svg[pixelarticons-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5H2v14h18v-4h2V9h-2V5zm0 2v10H4V7zM8 9H6v6h2zm2 0h2v6h-2zm6 0h-2v6h2z"></svg:path>`,
})
export class PixelarticonsBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
