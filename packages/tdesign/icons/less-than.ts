import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLessThanIcon],svg[tdesign-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.364 4.372L7.015 12l13.35 7.628l-.993 1.736L2.984 12l16.388-9.364z"></svg:path>`,
})
export class TdesignLessThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
