import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBackslashIcon],svg[ls-backslash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h82l477 854h-83z"></svg:path>`,
})
export class LsBackslashIcon {
  readonly viewBox = input("0 0 559 854")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
