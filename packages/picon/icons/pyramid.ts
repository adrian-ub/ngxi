import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPyramidIcon],svg[picon-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 6l4-6l4 6l-4 2m0-7v6l3-1"></svg:path>`,
})
export class PiconPyramidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
