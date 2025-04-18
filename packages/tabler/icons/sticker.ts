import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStickerIcon],svg[tabler-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20 12l-2 .5A6 6 0 0 1 11.5 6l.5-2z"></svg:path><svg:path d="M20 12a8 8 0 1 1-8-8"></svg:path></svg:g>`,
})
export class TablerStickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
