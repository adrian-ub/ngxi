import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMapOutlineIcon],svg[lsicon-map-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10.5 13V4m-5 8V3m-4 1.5l4-2l5 2l4-2v9l-4 2l-5-2l-4 2z"></svg:path>`,
})
export class LsiconMapOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
