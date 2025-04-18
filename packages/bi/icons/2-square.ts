import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bi2SquareIcon],svg[bi-2-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402c1.582 0 2.613.949 2.613 2.215c0 1.002-.6 1.667-1.287 2.43l-.096.107l-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705c0-.744-.557-1.236-1.313-1.236c-.843 0-1.336.615-1.336 1.306"></svg:path><svg:path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class Bi2SquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
