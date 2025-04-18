import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelKaggleIcon],svg[pixel-kaggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-4v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v1H8v4H5V1h3v14h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1z"></svg:path>`,
})
export class PixelKaggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
