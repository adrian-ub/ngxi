import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsTrailSignSharpIcon],svg[famicons-trail-sign-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m502.63 336l-80-80H278v-32h170V64H278V32h-44v32H89.37l-80 80l80 80H234v32H64v160h170v64h44v-64h144.63Z"></svg:path>`,
})
export class FamiconsTrailSignSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
