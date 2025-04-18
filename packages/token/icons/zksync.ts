import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenZksyncIcon],svg[token-zksync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21 12l-5.106-4.498v3.296l-5.07 3.298l5.07.002V16.5zM3 12l5.106 4.5v-3.263l5.034-3.3l-5.032-.002V7.5z" clip-rule="evenodd"></svg:path>`,
})
export class TokenZksyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
