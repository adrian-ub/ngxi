import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnUpDown48RegularIcon],svg[fluent-arrow-turn-up-down-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.407 38.474a1.25 1.25 0 0 1-2.313-.948l12.824-31.31c.763-1.863 3.401-1.863 4.164 0l12.374 30.208l4.167-8.713a1.25 1.25 0 1 1 2.255 1.078l-5.5 11.5c-.287.6-.994.87-1.608.615l-12-5a1.25 1.25 0 1 1 .961-2.308l9.483 3.952L23 7.727z"></svg:path>`,
})
export class FluentArrowTurnUpDown48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
