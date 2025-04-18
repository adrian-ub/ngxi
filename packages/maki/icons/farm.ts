import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFarmIcon],svg[maki-farm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6L5 4L2 6L1 8v4h2v-2h4v2h2V8zM6 8H4V6h2zm8 4h-3V2.5a1.5 1.5 0 1 1 3 0z"></svg:path>`,
})
export class MakiFarmIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
