import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHouseIcon],svg[picon-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8h2V5h2v3h2V4h1L4 0L0 4h1"></svg:path>`,
})
export class PiconHouseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
