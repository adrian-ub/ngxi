import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiAddFilledIcon],svg[weui-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2z"></svg:path>`,
})
export class WeuiAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
