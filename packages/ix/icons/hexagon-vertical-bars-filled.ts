import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHexagonVerticalBarsFilledIcon],svg[ix-hexagon-vertical-bars-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.246l192 110.851V366.8L256 477.65L64 366.8V145.097zM277.333 160h-42.666v192h42.666zM192 202.666h-42.667v106.667H192zm170.667 0H320v106.667h42.667z"></svg:path>`,
})
export class IxHexagonVerticalBarsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
