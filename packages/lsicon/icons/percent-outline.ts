import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPercentOutlineIcon],svg[lsicon-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 3L3 13m10-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-7-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path>`,
})
export class LsiconPercentOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
