import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRoadIcon],svg[ix-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m356.519 64l91.119 384h-43.85L312.667 64zm-157.208 0L108.19 448H64.362L155.48 64zm78.023 256v106.667h-42.667V320zm0-128v85.333h-42.667V192zm0-106.667v64h-42.667v-64z"></svg:path>`,
})
export class IxRoadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
