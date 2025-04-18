import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLeftSquareFilledIcon],svg[lsicon-left-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm3 2H5v8h6v-1H6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLeftSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
