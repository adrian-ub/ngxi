import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsThreeDEffectsIcon],svg[grommet-icons-three-d-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11 3h2l9 3v11l-10 3.5L2 17V6.5L4 6l9 2.5l-2 .5l-9-2.5"></svg:path>`,
})
export class GrommetIconsThreeDEffectsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
