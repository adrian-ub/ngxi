import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFloatingCrystalIcon],svg[game-icons-floating-crystal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320.94 24.86v55.654l45.31 58.49v66.27l41.24-64.038zm-56.706 16.263l-76.77 94.758l87.09 27.778l64.58-29.146l-24.81-32.024zm-143.074 88.5l-82.674 96.035l82.674 26.858zm226.403 21.588l-62.307 28.122v238.334l62.176-28.875V234.5l.13-.203V151.21zm-165.907 2.436v237.258l84.912 27.766V180.73l-84.912-27.084zM44.85 247.376l76.31 102.368v-77.58l-76.31-24.79zm331.31 4.413v154.415l82.752-13.533L376.16 251.79zm73.412 161.347L376.16 425.14v46.768l73.412-58.77zm-256.267 1.238l70.93 79.78l70.738-78.973l-57.516 26.713z"></svg:path>`,
})
export class GameIconsFloatingCrystalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
