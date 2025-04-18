import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGifIcon],svg[tabler-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H7m5-4v8m4-4h3m1-4h-4v8"></svg:path>`,
})
export class TablerGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
