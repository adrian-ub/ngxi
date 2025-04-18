import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSnowIcon],svg[mynaui-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19V5M9.953 3L12 5l2.047-2M9.953 21L12 19l2.047 2m-8.251-5.5l12.408-7m.749-2.732L18.204 8.5L21 9.232M3 14.768l2.796.732l-.75 2.732m.75-9.732l12.408 7M21 14.768l-2.796.732l.75 2.732M5.047 5.768L5.796 8.5L3 9.232"></svg:path>`,
})
export class MynauiSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
