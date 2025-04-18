import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSkateboardIcon],svg[iconoir-skateboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M2 9l3.333 1h13.334L22 9m-4.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class IconoirSkateboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
