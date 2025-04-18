import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRotateToLandscapeIcon],svg[flat-color-icons-rotate-to-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474F" d="M10 41V7c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#F3E5F5" d="M34 6H14c-.6 0-1 .4-1 1v34c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path><svg:path fill="#9C27B0" d="m22 34l5.9-7H16.1z"></svg:path><svg:path fill="#9C27B0" d="M26 16c-3.3 0-6 2.7-6 6v6h4v-6c0-1.1.9-2 2-2s2 .9 2 2v2h4v-2c0-3.3-2.7-6-6-6"></svg:path>`,
})
export class FlatColorIconsRotateToLandscapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
