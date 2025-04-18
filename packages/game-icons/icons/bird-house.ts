import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBirdHouseIcon],svg[game-icons-bird-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 22.93L45.22 203.6l19.31 19.3L256 63.37L447.4 222.9l19.4-19.3zm0 63.86L113 206l54.2 230.1h177.6L399 206zm0 68.31c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80m0 210c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16m-9 89v35h18v-35z"></svg:path>`,
})
export class GameIconsBirdHouseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
