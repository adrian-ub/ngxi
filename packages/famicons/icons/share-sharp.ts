import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsShareSharpIcon],svg[famicons-share-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 176v161h-32V176H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12Zm0-83.37l64 64L358.63 134L256 31.37L153.37 134L176 156.63l64-64V176h32z"></svg:path>`,
})
export class FamiconsShareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
