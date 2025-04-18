import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiInvertIcon],svg[oui-invert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13.25a5.25 5.25 0 1 0 0-10.5a5.25 5.25 0 0 0 0 10.5M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12"></svg:path><svg:path fill="currentColor" d="M8 2a6 6 0 1 0 0 12z"></svg:path>`,
})
export class OuiInvertIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
