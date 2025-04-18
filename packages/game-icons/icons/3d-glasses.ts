import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIcons3dGlassesIcon],svg[game-icons-3d-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 80L39.36 247h77.74L176 144l32 48v-48zm160 0l-32 64v48l32-48l58.9 103h77.7zM25 265v174h194.2l36.8-55.2l36.8 55.2H487V265zm23 23h176v64l-32 64H48zm240 0h176v128H320l-32-64z"></svg:path>`,
})
export class GameIcons3dGlassesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
