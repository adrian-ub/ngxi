import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelRobotIcon],svg[pixel-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h3v1h-3zm-3 0h2v1h-2zm-4 0h3v1H7z"></svg:path><svg:path fill="currentColor" d="M19 7h-1V6h-5V3h-2v3H6v1H5v1H4v10h1v1h1v1h12v-1h1v-1h1V8h-1zm-2 10v1H7v-1H6V9h1V8h10v1h1v8zm6-6v5h-1v1h-1v-7h1v1zM2 10h1v7H2v-1H1v-5h1z"></svg:path><svg:path fill="currentColor" d="M14 10h3v3h-3zm-7 0h3v3H7z"></svg:path>`,
})
export class PixelRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
