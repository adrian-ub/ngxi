import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStyloIcon],svg[picon-stylo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 7.5L0 8l.5-1.5M7 2L6 1l1-1l1 1M2 7L1 6l4.5-4.5l1 1"></svg:path>`,
})
export class PiconStyloIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
