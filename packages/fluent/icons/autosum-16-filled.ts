import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutosum16FilledIcon],svg[fluent-autosum-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.06 1.956a.75.75 0 0 1 .69-.456h9.5a.75.75 0 0 1 0 1.5H4.51l3.915 4.08a.75.75 0 0 1 .014 1.023L4.445 12.5h7.805a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.555-1.254l4.663-5.133l-4.65-4.844a.75.75 0 0 1-.148-.813"></svg:path>`,
})
export class FluentAutosum16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
