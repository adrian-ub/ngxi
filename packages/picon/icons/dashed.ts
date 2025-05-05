import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDashedIcon],svg[picon-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h6V3M0 8V0h8v8"></svg:path>`,
})
export class PiconDashedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
