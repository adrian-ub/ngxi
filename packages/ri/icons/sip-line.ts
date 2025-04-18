import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSipLineIcon],svg[ri-sip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.457 18.954l8.564-8.564l-1.414-1.414l-8.564 8.564zm5.735-11.392l-1.414-1.414l1.414-1.415l1.768 1.768l2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829l1.768 1.767l-1.415 1.415l-1.414-1.415l-9.192 9.193H3v-4.243z"></svg:path>`,
})
export class RiSipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
