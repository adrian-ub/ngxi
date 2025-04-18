import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02RightIcon],svg[ci-thin-long-02-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 15l3-3l-3-3l-.707.707l1.793 1.793H5v1h12.086l-1.793 1.793L16 15Z"></svg:path>`,
})
export class CiThinLong02RightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
