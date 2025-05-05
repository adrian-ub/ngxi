import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconXboxIcon],svg[picon-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 4l3 4l-4-3l-4 3l3-4l-3-4l4 2l4-2"></svg:path>`,
})
export class PiconXboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
