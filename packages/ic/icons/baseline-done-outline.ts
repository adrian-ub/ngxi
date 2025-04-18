import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDoneOutlineIcon],svg[ic-baseline-done-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6l1.4-1.4l4.2 4.2zm0-2.83L8.43 13.54l-4.2-4.2L0 13.57L8.43 22L24 6.43z"></svg:path>`,
})
export class IcBaselineDoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
