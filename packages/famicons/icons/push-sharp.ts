import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPushSharpIcon],svg[famicons-push-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 352V204.63l64 64L358.63 246L256 143.37L153.37 246L176 268.63l64-64V352H92a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h328a12 12 0 0 1 12 12v296a12 12 0 0 1-12 12Zm-32 0h32v128h-32z"></svg:path>`,
})
export class FamiconsPushSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
