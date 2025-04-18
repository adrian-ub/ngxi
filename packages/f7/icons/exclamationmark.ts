import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ExclamationmarkIcon],svg[f7-exclamationmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.012 37.363c1.242 0 2.11-.82 2.133-2.086l.21-27.304c0-1.336-1.101-2.25-2.367-2.25c-1.242 0-2.343.914-2.343 2.25l.257 27.304c.024 1.266.89 2.086 2.11 2.086m-.024 12.914a3.33 3.33 0 0 0 3.352-3.328c0-1.851-1.477-3.328-3.352-3.328a3.326 3.326 0 0 0-3.328 3.328a3.34 3.34 0 0 0 3.328 3.328"></svg:path>`,
})
export class F7ExclamationmarkIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
