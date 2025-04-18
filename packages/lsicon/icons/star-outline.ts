import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconStarOutlineIcon],svg[lsicon-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8 3l1.7 3.292L13 7l-2.25 2.382L11 13l-3-1.708L5 13l.25-3.618L3 7l3.3-.708z"></svg:path>`,
})
export class LsiconStarOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
