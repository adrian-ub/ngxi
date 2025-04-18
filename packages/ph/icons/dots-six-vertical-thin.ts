import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalThinIcon],svg[ph-dots-six-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-72 52a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-72 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsSixVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
