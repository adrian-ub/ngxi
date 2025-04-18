import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSquareRightIcon],svg[zmdi-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v299q0 17-12.5 29.5T427 384H43q-18 0-30.5-12.5T0 342v-86h43v86h384V42H43v86H0V43q0-18 12.5-30.5T43 0zM213 277v-64H0v-42h213v-64l86 85z"></svg:path>`,
})
export class ZmdiSquareRightIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
