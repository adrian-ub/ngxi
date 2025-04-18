import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThndrIcon],svg[arcticons-thndr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.305 8.132L4.52 39.868a.297.297 0 0 0 .173.381a.3.3 0 0 0 .104.02H8.76a.61.61 0 0 0 .574-.4L21.077 8.134a.297.297 0 0 0-.277-.4l-3.92-.003a.61.61 0 0 0-.574.4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.812 11.552h12.885s.702.288.532.923c-.318 1.234-1.122 3.032-1.335 3.865c.255.137 11.606 0 11.606 0l-20.513 9.593l1.63-4.243s-.13-.513-1.097-.513h-7.152"></svg:path>`,
})
export class ArcticonsThndrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
