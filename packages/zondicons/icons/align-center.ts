import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsAlignCenterIcon],svg[zondicons-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h18v2H1zm0 8h18v2H1zm0 8h18v2H1zM4 5h12v2H4zm0 8h12v2H4z"></svg:path>`,
})
export class ZondiconsAlignCenterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
