import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolCodeIcon],svg[websymbol-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1000 1l500 500l-500 500l-154-154l346-346l-346-346zM308 501l346 346l-154 154L0 501L500 1l154 154z"></svg:path>`,
})
export class WebsymbolCodeIcon {
  readonly viewBox = input("0 0 1500 1000")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
