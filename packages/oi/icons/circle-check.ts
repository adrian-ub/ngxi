import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCircleCheckIcon],svg[oi-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m2 1.78l.72.72L3.5 5.72L1.78 4l.72-.72l1 1z"></svg:path>`,
})
export class OiCircleCheckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
