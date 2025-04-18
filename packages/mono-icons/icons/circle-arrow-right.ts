import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsCircleArrowRightIcon],svg[mono-icons-circle-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10.293-4.707a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H7a1 1 0 1 1 0-2h7.586l-2.293-2.293a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class MonoIconsCircleArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
