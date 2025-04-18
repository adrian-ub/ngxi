import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFramesFilledIcon],svg[ix-frames-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 85.332h384v106.667H64zm0 149.333h128v192H64zm384 0H234.667v192H448z" clip-rule="evenodd"></svg:path>`,
})
export class IxFramesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
