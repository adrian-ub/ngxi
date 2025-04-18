import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineArrowKeysIcon],svg[icon-park-outline-arrow-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M14 4h20v20H14zM4 24h20v20H4zm20 0h20v20H24z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 24H4v20h20zm0 0v20zm0 0h20v20H24zM14 4h20v20H14zm10 6v8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m20 14l4-4l4 4M10 34h8m-4 4l-4-4l4-4m24 4h-8m4-4l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconParkOutlineArrowKeysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
