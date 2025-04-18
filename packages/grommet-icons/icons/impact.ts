import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsImpactIcon],svg[grommet-icons-impact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m13 2l9 4v11l-9 5zm9 4l-9 5zM9 22V2zm0-10L3 5zm0 0H1zm0 0l-6 7z"></svg:path>`,
})
export class GrommetIconsImpactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
