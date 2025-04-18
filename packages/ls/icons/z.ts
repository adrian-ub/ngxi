import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsZIcon],svg[ls-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 128h492L142 594h352v60H0l378-466H28z"></svg:path>`,
})
export class LsZIcon {
  readonly viewBox = input("0 0 520 654")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
