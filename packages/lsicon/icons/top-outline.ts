import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTopOutlineIcon],svg[lsicon-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 2.5h12M7.979 13.906V4.957m4.13 3.889L7.98 4.715l-4.131 4.13"></svg:path>`,
})
export class LsiconTopOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
