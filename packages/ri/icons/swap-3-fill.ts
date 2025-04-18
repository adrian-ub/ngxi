import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSwap3FillIcon],svg[ri-swap-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.914L3.707 8.207L2.293 6.793L7 2.086l4.707 4.707l-1.414 1.414L8 5.914V11H6zM12.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m9.207 10.207l-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293l-1.414 1.414L17 21.914zM11 14a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"></svg:path>`,
})
export class RiSwap3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
