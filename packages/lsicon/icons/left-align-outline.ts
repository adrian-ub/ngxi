import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLeftAlignOutlineIcon],svg[lsicon-left-align-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 2v12m2-10.5h9v3h-9zm0 6h7v3h-7z"></svg:path>`,
})
export class LsiconLeftAlignOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
