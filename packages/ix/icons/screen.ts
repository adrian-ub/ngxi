import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreenIcon],svg[ix-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 469.333v-42.666l85.333-.001v-64H64V64h384v298.667l-170.667-.001v64h85.334v42.667zm256-362.666H106.667V320h298.666z"></svg:path>`,
})
export class IxScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
