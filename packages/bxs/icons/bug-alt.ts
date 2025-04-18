import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBugAltIcon],svg[bxs-bug-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 5.414l1.707-1.707l-1.414-1.414l-1.563 1.562C15.483 2.708 13.824 2 12 2s-3.483.708-4.73 1.855L5.707 2.293L4.293 3.707L6 5.414A6.94 6.94 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.141 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.94 6.94 0 0 0-1-3.586M15 15H9v-2h6zm0-4H9V9h6z"></svg:path>`,
})
export class BxsBugAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
