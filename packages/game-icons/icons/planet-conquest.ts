import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPlanetConquestIcon],svg[game-icons-planet-conquest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215 32v140c5.9-1.4 11.9-2.6 18-3.4v-42.9c45-8 90 32.3 135 2.3V48c-45 30-90-10.31-135-2.29V32zm41 153c-83.5 0-151 67.5-151 151s67.5 151 151 151s151-67.5 151-151s-67.5-151-151-151m-20.6 25.8l77.4 119.3l-83.7 27.6l-22.8-54.1l-24.4 21.2l-57.9-12.5l48.3-50l41.4 7.9zm103.2 6.1l-10.2 34.9l38.3-.7l-36.4 31.1l-31.1-24.8l12.7-23.6zm33.6 148.4l-26.5 42.9l-21.2-36.1zM316 398l15.9 46.7c-35.1 28.4-87.1 35.9-115.6 16.9l38.2-60.9l29.2 30.7z"></svg:path>`,
})
export class GameIconsPlanetConquestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
