import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolCancelIcon],svg[websymbol-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m654 501l346 346l-154 154l-346-346l-346 346L0 847l346-346L0 155L154 1l346 346L846 1l154 154z"></svg:path>`,
})
export class WebsymbolCancelIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
