import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLongDownIcon],svg[ci-thin-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 18.5L12 22l3.5-3.5l-.707-.707l-2.293 2.293V2h-1v18.086l-2.293-2.293l-.707.707Z"></svg:path>`,
})
export class CiThinLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
