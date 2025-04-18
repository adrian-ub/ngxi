import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elInboxBoxIcon],svg[el-inbox-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m93.75 637.5l277.837-375h456.825l277.838 375H900l-150 150H450l-150-150zm235.538-450L0 637.5v375h1200v-375l-329.287-450z"></svg:path>`,
})
export class ElInboxBoxIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
