import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconReloadIcon],svg[picon-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v4H4l2-2c-6-5-7 9 0 4l1 1c-9 5-9-11 0-6"></svg:path>`,
})
export class PiconReloadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
