import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSplitHorizontallyIcon],svg[ix-split-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM106.667 277.333v128h298.666v-128zm0-42.666h298.666v-128H106.667z"></svg:path>`,
})
export class IxSplitHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
