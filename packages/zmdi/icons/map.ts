import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMapIcon],svg[zmdi-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M373 0q11 0 11 11v322q0 8-8 10l-120 41l-128-45l-114 44l-3 1q-11 0-11-11V51q0-8 8-10L128 0l128 45L370 1zM256 341V88L128 43v253z"></svg:path>`,
})
export class ZmdiMapIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
