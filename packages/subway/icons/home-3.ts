import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayHome3Icon],svg[subway-home-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M257 0L1 256l42.7 42.7L257 85.3l213.3 213.3L513 256zM107.7 298.7V512h298.7V298.7L257 149.3z"></svg:path>`,
})
export class SubwayHome3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
