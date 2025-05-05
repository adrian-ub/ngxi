import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSunIcon],svg[picon-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 3l1-3l1 3l3 1l-3 1l-1 3l-1-3l-3-1m1-3l3 2l3-2l-2 3l2 3l-3-2l-3 2l2-3"></svg:path>`,
})
export class PiconSunIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
