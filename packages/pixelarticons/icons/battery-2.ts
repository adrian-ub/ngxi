import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBattery2Icon],svg[pixelarticons-battery-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h18v-4h2V9h-2V5zm14 2v10H4V7zM6 9h2v6H6zm6 0h-2v6h2z"></svg:path>`,
})
export class PixelarticonsBattery2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
