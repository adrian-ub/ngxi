import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsMusicIcon],svg[grommet-icons-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 17.998C1 16.894 1.887 16 2.998 16H9v4.002A1.993 1.993 0 0 1 7.002 22H2.998A2 2 0 0 1 1 20.002zm14 0c0-1.104.887-1.998 1.998-1.998H23v4.002A1.993 1.993 0 0 1 21.002 22h-4.004A2 2 0 0 1 15 20.002zM9 16V2h14v13.5M9 6h14"></svg:path>`,
})
export class GrommetIconsMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
