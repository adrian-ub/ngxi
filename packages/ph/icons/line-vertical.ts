import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalIcon],svg[ph-line-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhLineVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
