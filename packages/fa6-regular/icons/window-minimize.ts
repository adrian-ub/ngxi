import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularWindowMinimizeIcon],svg[fa6-regular-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24z"></svg:path>`,
})
export class Fa6RegularWindowMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
