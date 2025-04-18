import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBytedanceAppletsIcon],svg[icon-park-outline-bytedance-applets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M24 4v19L8 36m16-13l16 13m-9-16l9-6m-23 6l-9-6m16 17v12"></svg:path>`,
})
export class IconParkOutlineBytedanceAppletsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
