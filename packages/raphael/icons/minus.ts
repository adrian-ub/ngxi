import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelMinusIcon],svg[raphael-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.98 12.896h-20v6.666h20z"></svg:path>`,
})
export class RaphaelMinusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
