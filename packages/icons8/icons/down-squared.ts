import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DownSquaredIcon],svg[icons8-down-squared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3.72 5.78l-1.44 1.44l6 6l.72.686l.72-.687l6-6l-1.44-1.44L16 18.064l-5.28-5.282z"></svg:path>`,
})
export class Icons8DownSquaredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
