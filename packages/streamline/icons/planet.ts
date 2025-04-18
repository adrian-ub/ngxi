import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlanetIcon],svg[streamline-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.73 2.21C10.82.8 12.56.15 13.2.8c1 1-1.04 4.56-4.44 8s-7 5.44-8 4.44c-.657-.657-.02-2.455 1.491-4.592"></svg:path><svg:path d="M5.44 11.754A5 5 0 0 0 7 12a5 5 0 0 0 4.736-6.613M3 10a5 5 0 0 1 7-7"></svg:path></svg:g>`,
})
export class StreamlinePlanetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
