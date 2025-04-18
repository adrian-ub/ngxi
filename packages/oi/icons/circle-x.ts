import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCircleXIcon],svg[oi-circle-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4M2.5 1.78L4 3.28l1.5-1.5l.72.72L4.72 4l1.5 1.5l-.72.72L4 4.72l-1.5 1.5l-.72-.72L3.28 4l-1.5-1.5z"></svg:path>`,
})
export class OiCircleXIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
