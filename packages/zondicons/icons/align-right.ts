import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsAlignRightIcon],svg[zondicons-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h18v2H1zm0 8h18v2H1zm0 8h18v2H1zM7 5h12v2H7zm0 8h12v2H7z"></svg:path>`,
})
export class ZondiconsAlignRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
