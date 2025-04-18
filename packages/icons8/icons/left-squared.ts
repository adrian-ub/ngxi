import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8LeftSquaredIcon],svg[icons8-left-squared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm10.78 2.28l-6 6l-.686.72l.687.72l6 6l1.44-1.44L13.937 16l5.28-5.28z"></svg:path>`,
})
export class Icons8LeftSquaredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
