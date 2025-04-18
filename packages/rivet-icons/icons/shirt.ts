import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsShirtIcon],svg[rivet-icons-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 .882l.447.224c1.719.859 3.387.859 5.106 0L11 .882l5 2.5V9h-3v6H3V9H0V3.382zm.016 2.228L2 4.618V7h3v6h6V7h3V4.618L10.984 3.11c-1.979.853-3.99.853-5.968 0"></svg:path>`,
})
export class RivetIconsShirtIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
