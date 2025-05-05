import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMailIcon],svg[picon-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l4-2l4 2l-4 2m4 2V3L4 4L0 3v4"></svg:path>`,
})
export class PiconMailIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
