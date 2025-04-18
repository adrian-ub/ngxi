import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRemindCloseFilledIcon],svg[lsicon-remind-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.715 4.422L1.646 2.354l.708-.708l12 12l-.707.708L12.293 13h-2.195a2.1 2.1 0 0 1-4.196 0H2v-1h1V7c0-.943.261-1.825.715-2.578M6.905 13a1.1 1.1 0 0 0 2.19 0zM7.5 2.025V1h1v1.025A5 5 0 0 1 13 7v4L5 3c.732-.585 1.516-.877 2.5-.975" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRemindCloseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
