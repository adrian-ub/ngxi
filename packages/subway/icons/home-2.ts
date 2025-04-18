import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayHome2Icon],svg[subway-home-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0L0 256l42.7 42.7l64-64V512h298.7V234.7l64 64L512 256zm106.7 469.3H149.3V192L256 85.3L362.7 192z"></svg:path>`,
})
export class SubwayHome2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
