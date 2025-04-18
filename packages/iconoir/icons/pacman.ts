import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPacmanIcon],svg[iconoir-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 12l.011.01M19 12l.011.01M22 12l.011.01M2 12c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8-3.999L12 12l8-6.001A9.99 9.99 0 0 0 12 2C6.477 2 2 6.477 2 12"></svg:path>`,
})
export class IconoirPacmanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
