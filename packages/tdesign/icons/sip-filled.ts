import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSipFilledIcon],svg[tdesign-sip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.558 12.356l-4.843-4.842l-9.643 9.643V22h4.842zm4.222-4.224a3.424 3.424 0 0 0-4.842-4.842L14.19 5.038l-1.286-1.285l-1.414 1.414l7.413 7.414l1.415-1.415l-1.286-1.285z"></svg:path>`,
})
export class TdesignSipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
