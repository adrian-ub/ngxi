import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTagIcon],svg[picon-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V0h1v3M2 8V6h1v2m5-6L4 6H1V4l4-4M2 4v1h1V4"></svg:path>`,
})
export class PiconTagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
