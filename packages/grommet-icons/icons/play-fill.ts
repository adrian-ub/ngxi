import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPlayFillIcon],svg[grommet-icons-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m3 22l18-10L3 2zm2-3l12.6-7L5 5zm2-3l7.2-4L7 8zm2-3l1.8-1L9 11z"></svg:path>`,
})
export class GrommetIconsPlayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
