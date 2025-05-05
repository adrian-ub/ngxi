import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVkIcon],svg[picon-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V2h1.5v2L6 2h2L6 5l2 2H6.5l-2-1.5V7H2L0 2h1.5"></svg:path>`,
})
export class PiconVkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
