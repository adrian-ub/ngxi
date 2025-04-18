import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPulse32RegularIcon],svg[fluent-pulse-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.52 5a1 1 0 0 1 .944.735l4.578 16.646l3.5-11.668a1 1 0 0 1 1.881-.098L24.667 16H28a1 1 0 1 1 0 2h-4a1 1 0 0 1-.923-.615l-1.424-3.417l-3.695 12.32a1 1 0 0 1-1.922-.023L11.43 9.518l-2.477 7.785A1 1 0 0 1 8 18H4a1 1 0 1 1 0-2h3.269l3.278-10.303A1 1 0 0 1 11.52 5"></svg:path>`,
})
export class FluentPulse32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
