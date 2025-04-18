import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalCenterOutlineIcon],svg[lsicon-vertical-center-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8 1v2.5m0 3v3m0 3V15M3.5 3.5h9v3h-9zm1 6h7v3h-7z"></svg:path>`,
})
export class LsiconVerticalCenterOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
