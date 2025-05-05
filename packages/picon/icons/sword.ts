import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSwordIcon],svg[picon-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8L0 7l2-2l-2-2h1l2 1l3-3l2-1l-1 2l-3 3l1 2v1L3 6"></svg:path>`,
})
export class PiconSwordIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
