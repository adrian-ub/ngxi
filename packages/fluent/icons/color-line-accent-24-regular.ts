import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLineAccent24RegularIcon],svg[fluent-color-line-accent-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.004 15.631a2 2 0 0 0 2.571 1.784l4.293-1.288a3.25 3.25 0 0 0 1.159-.627H19.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3a1 1 0 0 1 .504-.869"></svg:path>`,
})
export class FluentColorLineAccent24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
