import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFahrenheitLineIcon],svg[ri-fahrenheit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h7v2h-7v7h-2V8a4 4 0 0 1 4-4h7v2h-7a2 2 0 0 0-2 2zm-7.5-2a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiFahrenheitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
