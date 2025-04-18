import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02UpIcon],svg[ci-thin-long-02-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 8l-3-3l-3 3l.707.707L11.5 6.914V19h1V6.914l1.793 1.793L15 8Z"></svg:path>`,
})
export class CiThinLong02UpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
