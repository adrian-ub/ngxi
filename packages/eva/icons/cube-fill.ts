import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaCubeFillIcon],svg[eva-cube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 11.83L3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06ZM12 10.5l8.51-3.57a1.6 1.6 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.6 1.6 0 0 0-.51.38Zm.75 1.33V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36Z"></svg:path>`,
})
export class EvaCubeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
