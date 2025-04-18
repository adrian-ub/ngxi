import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWaveSquareIcon],svg[fa6-solid-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v352h96V256c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v160c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V96h-96v160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96z"></svg:path>`,
})
export class Fa6SolidWaveSquareIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
