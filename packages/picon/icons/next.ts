import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNextIcon],svg[picon-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8V0H5v8m0-4L1 0v8"></svg:path>`,
})
export class PiconNextIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
