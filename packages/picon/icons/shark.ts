import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSharkIcon],svg[picon-shark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 7l1-3l-1-3l2 2c4 1 0-5 4 0q5 2-4 2"></svg:path>`,
})
export class PiconSharkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
