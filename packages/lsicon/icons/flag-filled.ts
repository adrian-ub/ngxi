import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFlagFilledIcon],svg[lsicon-flag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .424.765L11.59 6.5l2.334 3.735A.5.5 0 0 1 13.5 11H4v4H3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFlagFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
