import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHeadsetIcon],svg[icon-park-solid-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 30v-5.538C42 14.266 33.941 6 24 6S6 14.266 6 24.462V30"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M34 32a4 4 0 0 1 4-4h4v14h-4a4 4 0 0 1-4-4z"></svg:path><svg:path fill="currentColor" d="M42 32h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2zM6 32H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2z"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M6 28h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6z"></svg:path></svg:g>`,
})
export class IconParkSolidHeadsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
