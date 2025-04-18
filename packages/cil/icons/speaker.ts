import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSpeakerIcon],svg[cil-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 16H128a32.036 32.036 0 0 0-32 32v416a32.036 32.036 0 0 0 32 32h256a32.036 32.036 0 0 0 32-32V48a32.036 32.036 0 0 0-32-32m0 448H128V48h256l.021 416Z"></svg:path><svg:path fill="currentColor" d="M256 240a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 160a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64m0-200a64 64 0 1 0-64-64a64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32"></svg:path><svg:path fill="currentColor" d="M240 320h32v32h-32z"></svg:path>`,
})
export class CilSpeakerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
