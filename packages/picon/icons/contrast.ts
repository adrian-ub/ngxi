import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconContrastIcon],svg[picon-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c4 0 4 6 0 6v1c5 0 5-8 0-8s-5 8 0 8"></svg:path>`,
})
export class PiconContrastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
