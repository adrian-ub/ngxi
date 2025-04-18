import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRemindOutlineIcon],svg[lsicon-remind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 12.5h12m-4.4.4a1.6 1.6 0 1 1-3.2 0M8 1v2m4.5 9.5h-9V7a4.5 4.5 0 1 1 9 0z"></svg:path>`,
})
export class LsiconRemindOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
