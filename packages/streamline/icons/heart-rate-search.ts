import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRateSearchIcon],svg[streamline-heart-rate-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 6a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m9.495 3.995L13 13"></svg:path><svg:path d="M2.516 6.156h1.53l1.032-1.968l1.563 3.625l1.343-1.657h1.5"></svg:path></svg:g>`,
})
export class StreamlineHeartRateSearchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
