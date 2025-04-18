import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNonBinaryIcon],svg[iconoir-non-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 0V3M9 4l6 3m0-3L9 7"></svg:path>`,
})
export class IconoirNonBinaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
