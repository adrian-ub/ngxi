import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCheckSquareIcon],svg[vaadin-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 .9L12 2H0v14h14V5.5l1.7-2zM6.5 11.7L2.3 7.5l1.4-1.4l2.7 2.7L13 2.2l1.4 1.4z"></svg:path>`,
})
export class VaadinCheckSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
