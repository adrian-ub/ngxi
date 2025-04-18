import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCompressIcon],svg[uil-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h5a1 1 0 0 0 0-2h-4V3a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1m-8 6H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1M8 2a1 1 0 0 0-1 1v4H3a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m13 13h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
