import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCompass1Icon],svg[subway-compass-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0M42.7 256c0-117.8 95.5-213.3 213.3-213.3S469.3 138.2 469.3 256c0 144-426.6 144-426.6 0m256 85.3L352 96L213.3 341.3z"></svg:path>`,
})
export class SubwayCompass1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
