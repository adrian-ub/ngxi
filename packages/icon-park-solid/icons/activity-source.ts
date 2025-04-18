import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidActivitySourceIcon],svg[icon-park-solid-activity-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M42 5H6v8h36zm0 15H6v8h36zm0 15H6v8h36z"></svg:path>`,
})
export class IconParkSolidActivitySourceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
