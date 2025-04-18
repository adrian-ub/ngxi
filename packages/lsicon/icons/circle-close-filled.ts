import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleCloseFilledIcon],svg[lsicon-circle-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m2.646 3.646L8 7.293L5.354 4.646l-.708.708L7.293 8l-2.647 2.646l.708.708L8 8.707l2.646 2.647l.708-.707L8.707 8l2.647-2.646z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleCloseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
