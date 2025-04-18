import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayHome1Icon],svg[subway-home-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0L0 256l42.7 42.7l64-64V512h298.7V234.7l64 64L512 256zm-21.3 448h-64v-64h64zm0-106.7h-64v-64h64zM341.3 448h-64v-64h64zm0-106.7h-64v-64h64zM426.7 0h-64v42.7l64 64z"></svg:path>`,
})
export class SubwayHome1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
