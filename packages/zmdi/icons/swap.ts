import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSwapIcon],svg[zmdi-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 171v64h150v42H85v64L0 256zm299-43l-85 85v-64H149v-42h150V43z"></svg:path>`,
})
export class ZmdiSwapIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
