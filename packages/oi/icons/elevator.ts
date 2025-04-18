import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiElevatorIcon],svg[oi-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L1 3h6zM1 5l3 3l3-3z"></svg:path>`,
})
export class OiElevatorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
