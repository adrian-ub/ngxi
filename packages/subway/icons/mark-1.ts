import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMark1Icon],svg[subway-mark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.3 0h-128C38.2 0 0 38.2 0 85.3v128L298.7 512L512 298.7zm-128 128c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7S128 61.8 128 85.3S108.9 128 85.3 128m85.4 192L320 170.7l42.7 42.7l-149.4 149.3zm85.3 85.3L405.3 256l42.7 42.7L298.7 448z"></svg:path>`,
})
export class SubwayMark1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
