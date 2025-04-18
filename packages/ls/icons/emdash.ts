import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsEmdashIcon],svg[ls-emdash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M643 248v73H0v-73z"></svg:path>`,
})
export class LsEmdashIcon {
  readonly viewBox = input("0 0 643 614")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
