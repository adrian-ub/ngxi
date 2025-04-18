import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLandmarkJpIcon],svg[maki-landmark-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class MakiLandmarkJpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
