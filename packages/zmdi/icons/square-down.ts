import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSquareDownIcon],svg[zmdi-square-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235 288l-86-85h64V11h43v192h64zM427 11q17 0 29.5 12.5T469 53v299q0 18-12.5 30.5T427 395H43q-18 0-30.5-12.5T0 352V53q0-17 12.5-29.5T43 11h128v42H43v299h384V53H299V11z"></svg:path>`,
})
export class ZmdiSquareDownIcon {
  readonly viewBox = input("0 0 472 400")
  readonly width = input("1.18em")
  readonly height = input("1em")
}
