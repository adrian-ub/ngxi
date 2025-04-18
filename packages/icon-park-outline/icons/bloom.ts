import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBloomIcon],svg[icon-park-outline-bloom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 32l12 10m24-10L30 42m-6-10v12m-7-33l7-7l7 7l7-1s1 4.239 1 7c0 10-8.5 15-15 15S9 27 9 17c0-2.761 1-7 1-7z"></svg:path>`,
})
export class IconParkOutlineBloomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
