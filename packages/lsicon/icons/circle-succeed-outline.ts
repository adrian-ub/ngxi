import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleSucceedOutlineIcon],svg[lsicon-circle-succeed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4.5 7.5L7 10l4.5-4.5m3 2.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconCircleSucceedOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
