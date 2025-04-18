import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicDiamondSolidIcon],svg[mynaui-music-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m3.71 7.26h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
