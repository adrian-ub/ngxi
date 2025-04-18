import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBackwardIcon],svg[la-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 5l-1.594 1.188l-12 9L2.344 16l1.062.813l12 9L17 27v-7.375l8.406 6.188L27 26.968V5.03l-1.594 1.157L17 12.375zm8 3.969V23.03l-8.406-6.187L15.469 16l1.125-.844zM15 9v14l-9.313-7z"></svg:path>`,
})
export class LaBackwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
