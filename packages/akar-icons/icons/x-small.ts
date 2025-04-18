import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsXSmallIcon],svg[akar-icons-x-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17L7 7m10 0L7 17"></svg:path>`,
})
export class AkarIconsXSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
