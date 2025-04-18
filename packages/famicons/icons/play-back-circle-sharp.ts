import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPlayBackCircleSharpIcon],svg[famicons-play-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m63.47 0L248 168v72.16l120-72.48v176.45l-120-72.32v71.44Z"></svg:path>`,
})
export class FamiconsPlayBackCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
