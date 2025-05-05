import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLeafIcon],svg[picon-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7q0-7 8-7q0 8-7 8l5-6"></svg:path>`,
})
export class PiconLeafIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
