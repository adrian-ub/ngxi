import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDeezerIcon],svg[tabler-brand-deezer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16.5h2v.5H3zm5 0h2.5v.5H8zm8 .5h-2.5v-.5H16zm5.5 0H19v-.5h2.5zm0-4H19v.5h2.5zm0-3.5H19v.5h2.5zm0-3.5H19v.5h2.5zM16 13h-2.5v.5H16zm-8 .5h2.5V13H8zm0-4h2.5v.5H8z"></svg:path>`,
})
export class TablerBrandDeezerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
