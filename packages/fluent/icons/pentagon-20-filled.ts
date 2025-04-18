import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPentagon20FilledIcon],svg[fluent-pentagon-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.761 1.658a2.5 2.5 0 0 0-3.37-.01L2.822 6.7a2.5 2.5 0 0 0-.672 2.702l2.149 5.947a2.5 2.5 0 0 0 2.351 1.65h6.827a2.5 2.5 0 0 0 2.369-1.702L17.87 9.28a2.5 2.5 0 0 0-.68-2.64z"></svg:path>`,
})
export class FluentPentagon20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
