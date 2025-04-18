import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapOutlineFilledIcon],svg[tdesign-map-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6 3.544L22 2.5v15.574l-7 4.084l-6-3.544L2 21.5V5.926z"></svg:path>`,
})
export class TdesignMapOutlineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
