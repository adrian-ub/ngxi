import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixClipboardFilledIcon],svg[ix-clipboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 85.33v85.334h213.334V85.331h64v384H85.333v-384zm170.667 0v42.667H192V42.664h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxClipboardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
