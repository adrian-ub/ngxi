import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiDotIcon],svg[oui-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="8" r="4" fill="currentColor"></svg:circle>`,
})
export class OuiDotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
