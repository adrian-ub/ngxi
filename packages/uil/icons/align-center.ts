import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAlignCenterIcon],svg[uil-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m4 2a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm14 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-4 4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
