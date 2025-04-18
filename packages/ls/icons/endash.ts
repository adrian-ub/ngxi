import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsEndashIcon],svg[ls-endash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 248v73H0v-73z"></svg:path>`,
})
export class LsEndashIcon {
  readonly viewBox = input("0 0 336 614")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
