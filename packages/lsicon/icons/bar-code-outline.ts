import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBarCodeOutlineIcon],svg[lsicon-bar-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 3v10m.5-10v10m-1-10v10m3-10v10m6-10v10M9 3v10m1-10v10m4.5-10v10m-2-10v10M7 3v10"></svg:path>`,
})
export class LsiconBarCodeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
