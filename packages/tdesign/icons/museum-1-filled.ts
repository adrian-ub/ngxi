import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum1FilledIcon],svg[tdesign-museum-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.101v-3.72l.034.033l1.38-1.448l-.724-.69A8.22 8.22 0 0 0 12 2a8.22 8.22 0 0 0-5.688 2.274l-.724.69l1.38 1.448L7 6.38v3.72A6.98 6.98 0 0 0 2 8H1v14h10v-7h2v7h10V8h-1c-1.959 0-3.73.804-5 2.101M3 10.1c2.282.463 4 2.481 4 4.9v5H3zM21 20h-4v-5a5 5 0 0 1 4-4.9zM13.004 6.998v2.004H11V6.998z"></svg:path>`,
})
export class TdesignMuseum1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
