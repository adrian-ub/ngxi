import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSouthEastFillIcon],svg[si-south-east-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 7.293a1 1 0 0 1 1.414 0L15 13.586V11a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.586L7.293 8.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthEastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
