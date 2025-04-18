import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsInvertModeSharpIcon],svg[famicons-invert-mode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M256 432v-96a80 80 0 0 1 0-160V80c97.05 0 176 79 176 176s-78.95 176-176 176"></svg:path><svg:path fill="currentColor" d="M336 256a80 80 0 0 0-80-80v160a80 80 0 0 0 80-80"></svg:path>`,
})
export class FamiconsInvertModeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
