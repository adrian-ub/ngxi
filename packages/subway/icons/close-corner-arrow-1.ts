import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCloseCornerArrow1Icon],svg[subway-close-corner-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 42.7L469.3 0l-128 128V0l-64 64l-.1 170.8l170.8-.1l64-64H384zM0 341.3h128L0 469.3L42.7 512l128-128v128l64-64l.1-170.8l-170.8.1z"></svg:path>`,
})
export class SubwayCloseCornerArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
