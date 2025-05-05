import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSublimtextIcon],svg[picon-sublimtext-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 2l6-2v2L4 3l3 1v2L1 8V6l3-1l-3-1"></svg:path>`,
})
export class PiconSublimtextIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
