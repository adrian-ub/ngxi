import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsVialIcon],svg[bxs-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22a4.97 4.97 0 0 0 3.535-1.465l9.193-9.193l.707.708l1.414-1.414l-8.485-8.486l-1.414 1.414l.708.707l-9.193 9.193C2.521 14.408 2 15.664 2 17s.521 2.592 1.465 3.535A4.97 4.97 0 0 0 7 22M18.314 9.928L15.242 13H6.758l7.314-7.314z"></svg:path>`,
})
export class BxsVialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
