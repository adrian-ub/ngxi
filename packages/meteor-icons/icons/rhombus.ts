import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRhombusIcon],svg[meteor-icons-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.4 2.4a2 2 0 0 1 3.2 0l7 8.2a2 2 0 0 1 0 2.8l-7 8.2a2 2 0 0 1-3.2 0l-7-8.2a2 2 0 0 1 0-2.8Z"></svg:path>`,
})
export class MeteorIconsRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
