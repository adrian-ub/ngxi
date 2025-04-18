import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPhotoReelIcon],svg[flat-color-icons-photo-reel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#673AB7" d="M10 9c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V13c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="#311B92" d="M14 13h2v26h-2zm10-4V7c0-1.2-.8-2-2-2h-8c-1.2 0-2 .8-2 2v2z"></svg:path><svg:path fill="#D84315" d="M30 13H16v26h14zm-9 24h-3v-4h3zm0-18h-3v-4h3zm6 18h-3v-4h3zm-3-18v-4h3v4z"></svg:path><svg:path fill="#FF5722" d="M30 13v2h3v4h-3v14h3v4h-3v2h12V13zm9 24h-3v-4h3zm0-18h-3v-4h3z"></svg:path>`,
})
export class FlatColorIconsPhotoReelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
