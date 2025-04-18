import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDubleCornerArrow1Icon],svg[subway-duble-corner-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.7.1l-93 93H349l-93 93l69.8 69.8l93-93v209.4l93-93L512 0zM256 325.8L186.2 256l-93 93V139.7l-93 93L0 512l279.3-.1l93-93H163z"></svg:path>`,
})
export class SubwayDubleCornerArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
