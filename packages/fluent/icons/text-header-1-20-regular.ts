import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHeader120RegularIcon],svg[fluent-text-header-1-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.554 4.003a.497.497 0 0 1 .446.506V15.5a.5.5 0 0 1-1 0V6.732a8.6 8.6 0 0 1-2.223 2.184a.5.5 0 1 1-.554-.832c1.415-.943 2.517-2.467 2.787-3.682a.5.5 0 0 1 .543-.4M2.5 4a.5.5 0 0 1 .5.5V9h6V4.5a.5.5 0 1 1 1 0v11a.5.5 0 0 1-1 0V10H3v5.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentTextHeader120RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
