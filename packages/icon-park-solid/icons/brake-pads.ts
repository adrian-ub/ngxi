import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBrakePadsIcon],svg[icon-park-solid-brake-pads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16"></svg:path><svg:path fill="currentColor" d="M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-24a20 20 0 0 1 20 20h-7.994A12.006 12.006 0 0 0 24 11.994z"></svg:path></svg:g>`,
})
export class IconParkSolidBrakePadsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
