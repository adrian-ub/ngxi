import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiExpandDownIcon],svg[oi-expand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h8V0zm2 2l2 2l2-2zM0 6v2h8V6z"></svg:path>`,
})
export class OiExpandDownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
