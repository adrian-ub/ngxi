import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsCameraSquareIcon],svg[duo-icons-camera-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 6h-1a1 1 0 0 0-.117 1.993L18 8h1a1 1 0 0 0 .117-1.993zm-7 1c-3.849 0-6.255 4.167-4.33 7.5A5 5 0 0 0 12 17c3.849 0 6.255-4.167 4.33-7.5A5 5 0 0 0 12 7" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsCameraSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
