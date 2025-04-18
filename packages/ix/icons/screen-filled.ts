import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreenFilledIcon],svg[ix-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v298.667l-170.667-.001v64h85.334v42.667H149.333v-42.666l85.333-.001v-64H64V64zm-42.667 42.667H106.667V320h298.666zM384 128v170.667H128V128z"></svg:path>`,
})
export class IxScreenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
