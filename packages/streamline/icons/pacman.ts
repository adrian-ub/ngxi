import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePacmanIcon],svg[streamline-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.215 3.786L7 7l5.215 3.214a6.125 6.125 0 1 1 0-6.428"></svg:path><svg:path d="M5.5 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlinePacmanIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
