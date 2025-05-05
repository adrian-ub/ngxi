import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconIncognitoIcon],svg[picon-incognito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8L1 7V4l1 1h1l1-1l1 1h1l1-1v3m1-3H0l2-2V1h4v1"></svg:path>`,
})
export class PiconIncognitoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
