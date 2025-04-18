import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feAlignCenterIcon],svg[fe-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13v-2H6.286C5.023 11 4 10.105 4 9s1.023-2 2.286-2H11V3a1 1 0 0 1 2 0v4h4.714C18.977 7 20 7.895 20 9s-1.023 2-2.286 2H13v2h3a2 2 0 1 1 0 4h-3v4a1 1 0 0 1-2 0v-4H8a2 2 0 1 1 0-4z"></svg:path>`,
})
export class FeAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
