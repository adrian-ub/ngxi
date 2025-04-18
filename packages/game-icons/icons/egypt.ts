import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsEgyptIcon],svg[game-icons-egypt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.208 51.973l7.023 407.352l398.925.702l63.636-60.515L326.02 133.443l8.428-9.833c26.455 31.79 72.101 106.86 79.364 93.41c15.243-28.226 13.407-53.944 19.665-80.768l-35.819-72.34l-65.317 13.345l-77.959-22.475l-76.965 24.687z"></svg:path>`,
})
export class GameIconsEgyptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
