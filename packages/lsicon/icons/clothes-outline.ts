import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconClothesOutlineIcon],svg[lsicon-clothes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 13.5h6v-6l2 1L14 5l-2-2.5h-1.5C10.5 3 9.2 4 8 4S5.5 3 5.5 2.5H4L2 5l1 3.5l2-1z"></svg:path>`,
})
export class LsiconClothesOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
