import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPorcelainVaseIcon],svg[game-icons-porcelain-vase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 30c-32 64-22.35 180.063 0 208c42.406 53.007 80 80 80 128c0 32-16 80-48 112v16H176v-16c-32.002-31.995-48-80-48-112c0-48 37.594-74.993 80-128c22.35-27.937 32-144 0-208c48-16 48-16 96 0"></svg:path>`,
})
export class GameIconsPorcelainVaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
