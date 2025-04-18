import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsZapIcon],svg[bxs-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.98 11.802a1 1 0 0 0-.738-.771l-6.86-1.716l2.537-5.921a1 1 0 0 0-.317-1.192a.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681l-3.345 5.854A1 1 0 0 0 8 22a1 1 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998"></svg:path>`,
})
export class BxsZapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
