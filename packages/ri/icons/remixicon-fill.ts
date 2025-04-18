import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRemixiconFillIcon],svg[ri-remixicon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 17.53L20.001 21h-17V4h10.667v.008A7 7 0 0 1 14.137 4q-.135.556-.136 1.166c0 2.318 2.015 4.333 4.667 4.333a4.2 4.2 0 0 0 2.032-.538a7 7 0 0 1-4.17 8.567M18.501 7.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class RiRemixiconFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
