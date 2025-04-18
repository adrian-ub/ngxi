import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAncientPavilionFillIcon],svg[ri-ancient-pavilion-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.516 7.877A4.5 4.5 0 0 0 5 11.887v7.114H3v2h18v-2h-2v-7.114a4.5 4.5 0 0 0 3.484-4.01A9 9 0 0 1 12.514 2h-1.029a9 9 0 0 1-9.97 5.877M17 19H7v-7h10z"></svg:path>`,
})
export class RiAncientPavilionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
