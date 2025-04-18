import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsEqualIcon],svg[ls-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M506 149v72H0v-72zm0 219v73H0v-73z"></svg:path>`,
})
export class LsEqualIcon {
  readonly viewBox = input("0 0 506 614")
  readonly width = input("0.83em")
  readonly height = input("1em")
}
