import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenOffFilledIcon],svg[lsicon-screen-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10 5.293l2.646-2.647l.708.708L10.707 6h1.445v1H9V3.848h1zM5.293 10H3.849V9H7v3.152H6v-1.445l-2.646 2.647l-.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScreenOffFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
