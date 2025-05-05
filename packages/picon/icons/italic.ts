import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconItalicIcon],svg[picon-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V1h5v1H5L4 6h2v1H1V6h2l1-4"></svg:path>`,
})
export class PiconItalicIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
