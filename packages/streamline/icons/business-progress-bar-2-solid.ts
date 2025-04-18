import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessProgressBar2SolidIcon],svg[streamline-business-progress-bar-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 1.218a.75.75 0 0 1 1.126-.65l4.488 2.494a.75.75 0 0 1 0 1.311L6.25 6.66v2.704c.502.203.902.603 1.105 1.105h3.495v-.815a.75.75 0 0 1 1.28-.53l1.565 1.564a.75.75 0 0 1-.004 1.065l-1.561 1.56a.75.75 0 0 1-1.28-.53v-.814H7.355a2 2 0 0 1-3.71 0H.836a.75.75 0 0 1 0-1.5h2.81A2 2 0 0 1 4.75 9.363z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBusinessProgressBar2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
