import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixOpenFileFilledIcon],svg[ix-open-file-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m220.75 85.334l53.889 42.61l-64.003 64.016h-93.985L44.004 426.667h-1.337V85.334zM148.114 234.62l330.757.005l-58.287 192.041H88.667z"></svg:path><svg:path fill-rule="nonzero" d="M426.667 42.667V192H384v-76.497L307.503 192h-60.34L353.83 85.333h-76.496V42.668z"></svg:path></svg:g>`,
})
export class IxOpenFileFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
