import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRightAlignOutlineIcon],svg[lsicon-right-align-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.5 2v12M2.5 3.5h9v3h-9zm2 6h7v3h-7z"></svg:path>`,
})
export class LsiconRightAlignOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
