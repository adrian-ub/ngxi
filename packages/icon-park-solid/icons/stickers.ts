import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStickersIcon],svg[icon-park-solid-stickers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20c0 0-10.5 3-17-4S24 4 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path d="M44 24L24 4"></svg:path></svg:g>`,
})
export class IconParkSolidStickersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
