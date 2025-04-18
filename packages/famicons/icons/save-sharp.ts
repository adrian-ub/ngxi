import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsSaveSharpIcon],svg[famicons-save-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56ZM112 176v-64h192v64Zm223.91 179.76a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67"></svg:path>`,
})
export class FamiconsSaveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
