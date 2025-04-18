import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsDiamondIcon],svg[bxs-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.445 3h-8.89c-.345 0-.666.178-.849.47L3.25 9h17.5l-3.456-5.53a1 1 0 0 0-.849-.47M11.26 21.186a1 1 0 0 0 1.48 0L22 11H2z"></svg:path>`,
})
export class BxsDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
