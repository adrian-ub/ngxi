import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconButterflyIcon],svg[picon-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c0-9 9 0 0 0c0 9 7 0 0 0c0 9-7 0 0 0c-9 0 0-9 0 0"></svg:path>`,
})
export class PiconButterflyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
