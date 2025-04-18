import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPlaySkipBackSharpIcon],svg[famicons-play-skip-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64z"></svg:path>`,
})
export class FamiconsPlaySkipBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
