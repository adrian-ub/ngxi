import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMinusIcon],svg[oui-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="1.5" x="3" y="7.25" fill="currentColor" rx=".5"></svg:rect>`,
})
export class OuiMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
