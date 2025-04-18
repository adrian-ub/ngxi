import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconToBottomFilledIcon],svg[lsicon-to-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 3h12M2 2h12M7.979 2v11M11.5 9.729L7.979 13.25L4.457 9.729"></svg:path>`,
})
export class LsiconToBottomFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
