import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRamIcon],svg[token-ram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.97 15.177L21 9.165l-3.218-3.24l-1.296 1.296l1.679 1.674l-3.307 3.298l-2.89-2.88l-1.435 1.431l4.442 4.433zm-5.94 0L3 9.165l2.97-2.997l1.296 1.296l-1.701 1.7l3.307 3.3l1.197-1.193l1.44 1.43l-2.484 2.476zm2.916-1.962l-2.439 2.43l2.439 2.43l2.435-2.43z"></svg:path>`,
})
export class TokenRamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
