import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBeanIcon],svg[picon-bean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C0 0 0 8 4 8s4-8 0-8m0 0C2 5 7 3 4 8c2-5-3-3 0-8"></svg:path>`,
})
export class PiconBeanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
