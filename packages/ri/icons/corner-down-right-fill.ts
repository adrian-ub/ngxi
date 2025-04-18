import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerDownRightFillIcon],svg[ri-corner-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14V5h2v7h7.586V6.586L21 13l-6.414 6.414V14z"></svg:path>`,
})
export class RiCornerDownRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
