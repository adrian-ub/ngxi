import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNftFillIcon],svg[ri-nft-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3-11l9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.653v8.694l2.372 1.373l8.073-5.92l4.555 2.734v-6.88L12 3.31z"></svg:path>`,
})
export class RiNftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
