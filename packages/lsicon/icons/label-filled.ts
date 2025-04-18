import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLabelFilledIcon],svg[lsicon-label-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .743.437L8 12.572l4.257 2.365A.5.5 0 0 0 13 14.5v-13a.5.5 0 0 0-.5-.5zM5 4h6V3H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLabelFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
