import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinGlassIcon],svg[vaadin-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15H9V7l6-7H0l6 7v8H4c-2 0-2 1-2 1h11s0-1-2-1m1.9-14l-1.8 2H3.9L2.2 1zM7 15V7h1v8z"></svg:path>`,
})
export class VaadinGlassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
