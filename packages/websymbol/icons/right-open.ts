import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolRightOpenIcon],svg[websymbol-right-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m154 1l500 500l-500 500L0 847l346-346L0 155z"></svg:path>`,
})
export class WebsymbolRightOpenIcon {
  readonly viewBox = input("0 0 654 1000")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
