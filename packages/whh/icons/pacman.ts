import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPacmanIcon],svg[whh-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 512l385 337q-72 82-172 128.5T512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q113 0 213 46.5T897 175z"></svg:path>`,
})
export class WhhPacmanIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
