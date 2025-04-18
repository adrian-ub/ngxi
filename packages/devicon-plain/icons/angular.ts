import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainAngularIcon],svg[devicon-plain-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m78.36 0l41.77 89.9l4.34-68.57zM38.87 94.47l-6.42 15.54L64 128l31.55-17.99l-6.42-15.54zM80.53 74.3L64 34.11L47.47 74.3zm-77-52.97L7.87 89.9L49.64 0z"></svg:path>`,
})
export class DeviconPlainAngularIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
