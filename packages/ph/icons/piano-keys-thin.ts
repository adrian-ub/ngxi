import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPianoKeysThinIcon],svg[ph-piano-keys-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M76 44h32v96H76Zm36 104a4 4 0 0 0 4-4V44h24v100a4 4 0 0 0 4 4h12v64h-56v-64Zm36-8V44h32v96ZM44 208V48a4 4 0 0 1 4-4h20v100a4 4 0 0 0 4 4h20v64H48a4 4 0 0 1-4-4m168 0a4 4 0 0 1-4 4h-44v-64h20a4 4 0 0 0 4-4V44h20a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhPianoKeysThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
