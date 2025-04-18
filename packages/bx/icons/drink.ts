import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDrinkIcon],svg[bx-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697zM12 14.197L8.535 9h6.93zM18.132 5l-1.333 2H7.201L5.868 5z"></svg:path>`,
})
export class BxDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
