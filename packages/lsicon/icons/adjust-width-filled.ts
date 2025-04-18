import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAdjustWidthFilledIcon],svg[lsicon-adjust-width-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 13V3h1v10zm14 0h-1V3h1zM4.207 8.5l1.147 1.146l-.708.708L2.293 8l2.353-2.354l.708.708L4.207 7.5H7v1zm7.147-2.854L13.707 8l-2.353 2.354l-.708-.708L11.793 8.5H9v-1h2.793l-1.147-1.146z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAdjustWidthFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
