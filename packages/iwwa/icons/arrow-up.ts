import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaArrowUpIcon],svg[iwwa-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.659 28.167h30.682L20 7.833z"></svg:path>`,
})
export class IwwaArrowUpIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
