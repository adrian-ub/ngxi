import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNorthIcon],svg[picon-north-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l2-2l2 2"></svg:path>`,
})
export class PiconNorthIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
