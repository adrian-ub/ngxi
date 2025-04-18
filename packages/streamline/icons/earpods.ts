import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEarpodsIcon],svg[streamline-earpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5a3 3 0 0 1 2 .76v4.48a3 3 0 0 1-2 .76a3 3 0 0 1-.5 0v5.75a1.25 1.25 0 0 1-2.5 0V3.5a3 3 0 0 1 3-3m-9 0a3 3 0 0 0-2 .76v4.48a3 3 0 0 0 2 .76q.25.022.5 0v5.75a1.25 1.25 0 0 0 2.5 0V3.5a3 3 0 0 0-3-3"></svg:path>`,
})
export class StreamlineEarpodsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
