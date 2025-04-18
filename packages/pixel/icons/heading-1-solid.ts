import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelHeading1SolidIcon],svg[pixel-heading-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v16H9v-7H4v7H1V4h3v6h5V4zm11 13v3h-9v-3h3V8h-1v1h-2V6h1V5h1V4h4v13z"></svg:path>`,
})
export class PixelHeading1SolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
