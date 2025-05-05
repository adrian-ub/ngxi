import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRedhatIcon],svg[picon-redhat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5C6 9-1 3 1 3q4 3 6 1m-.5 0Q5 5 2 3l.5-2Q4 2 4 1l2 1"></svg:path>`,
})
export class PiconRedhatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
