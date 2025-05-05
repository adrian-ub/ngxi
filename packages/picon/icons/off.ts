import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOffIcon],svg[picon-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-2 3-2 3 0S1 6 1 4m4.5 2c3 0 3-4 0-4h-3c-3 0-3 4 0 4"></svg:path>`,
})
export class PiconOffIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
