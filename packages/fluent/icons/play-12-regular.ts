import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlay12RegularIcon],svg[fluent-play-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.862a1 1 0 0 1 1.496-.868l5.492 3.138a1 1 0 0 1 0 1.736l-5.492 3.139A1 1 0 0 1 3 9.139zM9.492 6L4 2.862v6.277z"></svg:path>`,
})
export class FluentPlay12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
