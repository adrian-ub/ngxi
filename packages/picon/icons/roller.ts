import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRollerIcon],svg[picon-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2V1h2v4H4v3H2V4h5V2M0 3V0h6v3"></svg:path>`,
})
export class PiconRollerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
