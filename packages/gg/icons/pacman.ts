import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPacmanIcon],svg[gg-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.064 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M13 3c2.152 0 4.128.756 5.677 2.016l1.447 1.447l-1.295 1.295h-.001L14.585 12l3.639 3.638l-.002.002l1.905 1.904l-1.413 1.413l-.002-.002A9 9 0 1 1 13 3m-1.243 9l5.532 5.532a7 7 0 1 1 0-11.065z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPacmanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
