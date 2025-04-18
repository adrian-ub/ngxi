import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBowlingBallSharpIcon],svg[famicons-bowling-ball-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M286 230a28 28 0 1 1 28-28a28 28 0 0 1-28 28m8-76a28 28 0 1 1 28-28a28 28 0 0 1-28 28m68 44a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class FamiconsBowlingBallSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
