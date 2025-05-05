import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPlusIcon],svg[picon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5V4h5v1M3 7V2h1v5"></svg:path>`,
})
export class PiconPlusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
