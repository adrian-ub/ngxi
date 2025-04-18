import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAlignTxtCenterOutlineIcon],svg[lsicon-align-txt-center-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 8h4M4 5.5h8m-8 5h8m-9.5-8h11v11h-11z"></svg:path>`,
})
export class LsiconAlignTxtCenterOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
