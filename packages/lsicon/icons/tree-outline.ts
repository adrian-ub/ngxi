import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTreeOutlineIcon],svg[lsicon-tree-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7.997 4.152V7.5m0 0h5V11m-5-3.5h-5V11m5-3.5V11M9.5 2.507V4.51h-3V2.507zm5 7.993v2h-3v-2zm-5 0v2h-3v-2zm-5 0v2h-3v-2z"></svg:path>`,
})
export class LsiconTreeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
