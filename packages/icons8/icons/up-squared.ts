import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8UpSquaredIcon],svg[icons8-up-squared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9 4.094l-.72.687l-6 6l1.44 1.44L16 13.937l5.28 5.28l1.44-1.437l-6-6z"></svg:path>`,
})
export class Icons8UpSquaredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
