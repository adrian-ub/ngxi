import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CircleLefthalfFillIcon],svg[f7-circle-lefthalf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.012 51.273c12.726 0 23.273-10.546 23.273-23.273c0-12.703-10.57-23.273-23.297-23.273S4.715 15.297 4.715 28c0 12.727 10.57 23.273 23.297 23.273m0-3.96L27.988 8.71c10.688 0 19.29 8.602 19.313 19.289c.023 10.71-8.602 19.313-19.29 19.313"></svg:path>`,
})
export class F7CircleLefthalfFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
