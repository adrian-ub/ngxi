import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSpiderMaskIcon],svg[game-icons-spider-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 24c-96 0-160 80-160 160c0 192 80 304 160 304s160-112 160-304c0-80-64-160-160-160M128 168c7.8 32 35 91.9 96 128l-48 48c-67.7-41.1-64-144-48-176m256 0c16 32 19.7 134.9-48 176l-48-48c61-36.1 88.2-96 96-128"></svg:path>`,
})
export class GameIconsSpiderMaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
