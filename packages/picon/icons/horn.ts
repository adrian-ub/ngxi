import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHornIcon],svg[picon-horn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c-4 1-4-5 0-4q3 3 5 0v4Q6 3 3 6"></svg:path>`,
})
export class PiconHornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
