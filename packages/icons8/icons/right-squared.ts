import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8RightSquaredIcon],svg[icons8-right-squared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm7.22 2.28l-1.44 1.44L18.064 16l-5.282 5.28l1.44 1.44l6-6l.686-.72l-.687-.72z"></svg:path>`,
})
export class Icons8RightSquaredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
