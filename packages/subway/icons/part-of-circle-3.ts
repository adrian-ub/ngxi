import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPartOfCircle3Icon],svg[subway-part-of-circle-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.8 0v256l-181 181c46.4 46.3 110.4 75 181 75c141.4 0 256-114.6 256-256S363.2 0 221.8 0"></svg:path>`,
})
export class SubwayPartOfCircle3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
