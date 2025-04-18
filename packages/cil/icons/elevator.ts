import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilElevatorIcon],svg[cil-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 30.4L96 168.681V232h320v-63.319ZM384 200H128v-16.681L256 72.7l128 110.619ZM96 343.319L256 481.6l160-138.281V280H96ZM128 312h256v16.681L256 439.3L128 328.681Z"></svg:path>`,
})
export class CilElevatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
