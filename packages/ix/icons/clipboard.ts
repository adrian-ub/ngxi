import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixClipboardIcon],svg[ix-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 42.664h170.666v42.667h85.334v384H85.333v-384h85.334zm170.666 85.333H384v298.667H128V127.997h42.667v42.667h170.666zm-42.666 0V85.331h-85.334v42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxClipboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
