import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCheckSquareOIcon],svg[vaadin-check-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6.2V14H2V2h10.5l1-1H1v14h14V5.2z"></svg:path><svg:path fill="currentColor" d="M7.9 10.9L3.7 6.7l1.5-1.4l2.7 2.8l6.7-6.7L16 2.8z"></svg:path>`,
})
export class VaadinCheckSquareOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
