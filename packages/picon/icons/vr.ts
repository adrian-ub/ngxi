import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVrIcon],svg[picon-vr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h8v1Q7 8 4 4Q1 8 0 3m1 0l1-3h4l1 3l-1-2H2"></svg:path>`,
})
export class PiconVrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
