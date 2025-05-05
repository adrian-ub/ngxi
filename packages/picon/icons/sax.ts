import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSaxIcon],svg[picon-sax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5L4 4h2m1 0L5 3h2M3 6h2l1-1l1 3H5L1 7V6l4-4l-1-1V0l3 2"></svg:path>`,
})
export class PiconSaxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
