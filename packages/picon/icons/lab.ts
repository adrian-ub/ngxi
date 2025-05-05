import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLabIcon],svg[picon-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8L0 7l3-5l-2-2h6L5 2l3 5l-1 1"></svg:path>`,
})
export class PiconLabIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
