import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSortNumberDescIcon],svg[ri-sort-number-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V3H7.314L5 3.62v2.329l2-.539V11zm13-3l-4-5l-4 5h3v13h2V8zM8 16.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m2.573.544a3 3 0 1 0-3.121 1.406L5.979 21h2.31z"></svg:path>`,
})
export class RiSortNumberDescIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
