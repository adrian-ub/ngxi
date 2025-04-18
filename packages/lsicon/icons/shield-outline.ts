import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShieldOutlineIcon],svg[lsicon-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m5.5 7.5l2 2L11 6M2.5 2.5V9a5.5 5.5 0 1 0 11 0V2.5z"></svg:path>`,
})
export class LsiconShieldOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
