import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTIcon],svg[ls-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 228h91v60h-91v466H92V288H0v-60h92V0h72z"></svg:path>`,
})
export class LsTIcon {
  readonly viewBox = input("0 0 255 754")
  readonly width = input("0.34em")
  readonly height = input("1em")
}
