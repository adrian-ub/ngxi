import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibReverbnationIcon],svg[cib-reverbnation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m32 12.432l-12.193-.041L15.964.76l-3.771 11.631l-12.152.041l9.823 7.141L6.057 31.24h.036l9.948-7.183l9.86 7.183l-3.808-11.641L32 12.422z"></svg:path>`,
})
export class CibReverbnationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
