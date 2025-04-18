import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psHandPointerRightIcon],svg[ps-hand-pointer-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 341h43q17 0 29.5-12.5T237 299h-85q-47 0-79-35t-28-83q5-41 37-68.5T156 85h81q18 0 30.5-12.5T280 43H156Q98 43 54 80T3 173q-8 67 37 117.5T152 341m128-106h-64q-21 0-21 21t21 21h64q21 0 21-21t-21-21m0-64h-64q-21 0-21 21t21 21h64q21 0 21-21t-21-21m149-43q0-21-21-21H216v42h192q21 0 21-21"></svg:path>`,
})
export class PsHandPointerRightIcon {
  readonly viewBox = input("0 0 432 448")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
