import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolLeftOpenIcon],svg[websymbol-left-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m308 501l346 346l-154 154L0 501L500 1l154 154z"></svg:path>`,
})
export class WebsymbolLeftOpenIcon {
  readonly viewBox = input("0 0 654 1000")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
