import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderIntegralOutlineIcon],svg[lsicon-order-integral-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 2.5h-2v12h5m2-12h2v5m-3 2v4c0 .333.5 1 2.5 1s2.5-.833 2.5-1v-4m-5 0c0-.5 1-1 2.5-1s2.5.5 2.5 1m-5 0c0 .333.5 1 2.5 1s2.5-.667 2.5-1m-5 2c0 .333.5 1 2.5 1s2.5-.667 2.5-1m-9-10h5l-.625 2h-3.75z"></svg:path>`,
})
export class LsiconOrderIntegralOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
