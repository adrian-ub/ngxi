import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpamFillIcon],svg[ri-spam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5zM11 15v2h2v-2zm0-8v6h2V7z"></svg:path>`,
})
export class RiSpamFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
