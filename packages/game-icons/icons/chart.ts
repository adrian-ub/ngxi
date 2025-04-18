import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsChartIcon],svg[game-icons-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 23v466h466v-18H41v-82.184l85.854-57.234l70.023 70.022l65.133-260.536L387.28 203.7l67.79-107.97l19.317 11.858l6.102-71.1l-60.644 37.616l19.884 12.207l-59.01 93.99l-130.732-65.366l-62.865 251.462l-57.98-57.978L41 367.184V23z"></svg:path>`,
})
export class GameIconsChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
