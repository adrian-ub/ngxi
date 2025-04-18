import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFlagAltIcon],svg[ix-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 42.664H85.333v426.667H128V354.754l298.334-143.2L128 92.221zm0 95.51v169.253l192.333-92.32z" clip-rule="evenodd"></svg:path>`,
})
export class IxFlagAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
