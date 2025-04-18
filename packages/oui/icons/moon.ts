import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMoonIcon],svg[oui-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.796 9.048c-1.552-2.238-1.199-5.323.61-8.1c-3.47-.12-6.6 2.232-7.269 5.672c-.742 3.82 1.83 7.533 5.749 8.294a7.23 7.23 0 0 0 7.526-3.218c-2.794.177-5.27-.711-6.616-2.648"></svg:path>`,
})
export class OuiMoonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
