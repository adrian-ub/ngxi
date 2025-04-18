import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelArrowaltIcon],svg[raphael-arrowalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1.466C7.973 1.466 1.466 7.973 1.466 16S7.973 30.534 16 30.534S30.534 24.027 30.534 16S24.027 1.466 16 1.466m-2.335 24.26l-3.536-3.54L16.315 16L10.13 9.81l3.535-3.536L23.39 16z"></svg:path>`,
})
export class RaphaelArrowaltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
