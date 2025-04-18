import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMuseumOneIcon],svg[icon-park-solid-museum-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M8 8.364L24 4l16 4.364V14H8z"></svg:path><svg:path stroke-linecap="round" d="M10 14v24m7-24v24m7-24v24m7-24v24m7-24v24"></svg:path><svg:path stroke-linejoin="round" d="M7 38h34v6H7z"></svg:path></svg:g>`,
})
export class IconParkSolidMuseumOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
