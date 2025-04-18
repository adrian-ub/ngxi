import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUDiskIcon],svg[icon-park-outline-u-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 12V4H18v8"></svg:path><svg:path d="M13 12.374c0-.207.167-.374.373-.374h21.254c.206 0 .373.167.373.373V33c0 6.075-4.925 11-11 11s-11-4.925-11-11z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 21h8m-8 8h8"></svg:path></svg:g>`,
})
export class IconParkOutlineUDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
