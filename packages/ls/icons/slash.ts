import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsSlashIcon],svg[ls-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 854L306 0h77L77 854z"></svg:path>`,
})
export class LsSlashIcon {
  readonly viewBox = input("0 0 383 854")
  readonly width = input("0.45em")
  readonly height = input("1em")
}
