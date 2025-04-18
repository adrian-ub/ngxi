import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRoadFilledIcon],svg[ix-road-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m352 64l96 384H64l85.333-384zm-74.667 256h-42.666v106.667h42.666zm0-128h-42.666v85.333h42.666zm0-106.667h-42.666v64h42.666z"></svg:path>`,
})
export class IxRoadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
