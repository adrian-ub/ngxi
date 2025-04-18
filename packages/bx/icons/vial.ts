import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxVialIcon],svg[bx-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.95 3.564l.708.707l-9.193 9.193C2.521 14.408 2 15.664 2 17s.521 2.592 1.465 3.535C4.408 21.479 5.664 22 7 22s2.592-.521 3.535-1.465l9.193-9.193l.707.708l1.414-1.414l-8.485-8.486zM9.121 19.121c-1.133 1.133-3.109 1.133-4.242 0C4.313 18.555 4 17.802 4 17s.313-1.555.879-2.121L5.758 14h8.484zM16.242 12H7.758l6.314-6.314l4.242 4.242z"></svg:path>`,
})
export class BxVialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
