import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCurlingIcon],svg[picon-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6c0-3 8-3 8 0S0 9 0 6m0 0v.5h8V6M2 3V2h3v2L4 3"></svg:path>`,
})
export class PiconCurlingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
