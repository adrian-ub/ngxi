import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAreaSelectIcon],svg[vaadin-area-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.9 7.9l2.1 7.5l1.7-2.6l3.2 3.2l1.1-1.1l-3.3-3.2l2.7-1.6z"></svg:path><svg:path fill="currentColor" d="M8 12H1V3h12v5.4l1 .2V2H0v11h8.2z"></svg:path>`,
})
export class VaadinAreaSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
