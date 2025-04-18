import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCaneIcon],svg[streamline-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8.799 9.979l-.057-.641a1.183 1.183 0 0 1 1.075-1.282v0a1.18 1.18 0 0 1 1.211.764l1.411 3.772M3.57 2.822a1.715 1.715 0 1 0 3.43 0a1.715 1.715 0 1 0-3.43 0"></svg:path><svg:path d="m2.099 12.592l2.573-8.148c.278.706 1.565 2.557 3.194 2.386"></svg:path><svg:path d="m3.57 7.963l2.087 1.503a1 1 0 0 1 .388.577l.615 2.549"></svg:path></svg:g>`,
})
export class StreamlineCaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
