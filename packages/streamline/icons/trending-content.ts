import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTrendingContentIcon],svg[streamline-trending-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.15.555a.39.39 0 0 0-.399 0a.26.26 0 0 0-.06.34c1.227 2.123 1.486 5.016-.19 6.611a5.5 5.5 0 0 1-1.495-1.994a3.88 3.88 0 0 0-1.995 3.49a4.69 4.69 0 0 0 4.987 4.488c3.211 0 4.877-1.994 4.986-4.488C12.114 6.01 9.99 2.33 6.15.555"></svg:path>`,
})
export class StreamlineTrendingContentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
