import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTabUnselectedIcon],svg[zmdi-tab-unselected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128V85h43v43zm0 85v-42h43v42zM0 43q0-18 12.5-30.5T43 0v43zm171 341v-43h42v43zM0 299v-43h43v43zm43 85q-18 0-30.5-12.5T0 341h43zM427 0q17 0 29.5 12.5T469 43v85H256V0zm0 299v-43h42v43zM171 43V0h42v43zM85 384v-43h43v43zm0-341V0h43v43zm342 341v-43h42q0 18-12.5 30.5T427 384m0-171v-42h42v42zM256 384v-43h43v43zm85 0v-43h43v43z"></svg:path>`,
})
export class ZmdiTabUnselectedIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
