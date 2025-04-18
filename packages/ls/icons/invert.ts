import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsInvertIcon],svg[ls-invert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 48h768v598H0zm384 547v-71l177-177l-177-177V99H51v496zm0-71L207 347l177-177z"></svg:path>`,
})
export class LsInvertIcon {
  readonly viewBox = input("0 0 768 646")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
