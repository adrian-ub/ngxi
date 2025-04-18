import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeOffSharpIcon],svg[famicons-volume-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.65 176.1H144v159.8h93.65L368 440V72z"></svg:path>`,
})
export class FamiconsVolumeOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
