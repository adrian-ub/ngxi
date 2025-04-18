import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayHomeIcon],svg[subway-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0L0 256l42.7 42.7l64-64V512h298.6V234.7l64 64L512 256z"></svg:path>`,
})
export class SubwayHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
