import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHomeOutlineIcon],svg[lsicon-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 10.5h6M2.5 6v7.5h11V6L8 2.5z"></svg:path>`,
})
export class LsiconHomeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
