import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationVideoIcon],svg[foundation-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.272 61.337v10.565c0 2.497-2.043 4.535-4.539 4.535H14.54c-2.496 0-4.54-2.038-4.54-4.535V28.097c0-2.496 2.043-4.535 4.54-4.535h47.193c2.496 0 4.539 2.038 4.539 4.535v10.432v-.146L90 27.265v45.294z"></svg:path>`,
})
export class FoundationVideoIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
