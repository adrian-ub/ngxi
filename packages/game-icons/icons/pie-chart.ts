import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPieChartIcon],svg[game-icons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m290.352 13.213l-11.475 218.984l204.68-78.584a219.242 219.284 0 0 0-193.205-140.4m-51.39 47.566A219.242 219.284 0 0 0 38.59 206.24a219.242 219.284 0 0 0 77.3 250.918a219.242 219.284 0 0 0 262.49-3.092a219.242 219.284 0 0 0 71.366-252.67l-204.682 78.583l12.24-218.943a219.242 219.284 0 0 0-18.34-.258z"></svg:path>`,
})
export class GameIconsPieChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
