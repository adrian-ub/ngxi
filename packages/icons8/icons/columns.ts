import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ColumnsIcon],svg[icons8-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h8v18H7zm10 0h8v18h-8z"></svg:path>`,
})
export class Icons8ColumnsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
