import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlignTextMiddleIcon],svg[icon-park-outline-align-text-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m18 36l6-6l6 6m-6-5v13m-6-32l6 6l6-6m-6 5V4M6 24h36"></svg:path>`,
})
export class IconParkOutlineAlignTextMiddleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
