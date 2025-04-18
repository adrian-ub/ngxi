import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsIndentDecreaseIcon],svg[zondicons-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h18v2H1zm6 8h12v2H7zm-6 8h18v2H1zM7 5h12v2H7zm0 8h12v2H7zM5 6v8l-4-4z"></svg:path>`,
})
export class ZondiconsIndentDecreaseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
