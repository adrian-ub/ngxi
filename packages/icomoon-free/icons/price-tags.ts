import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePriceTagsIcon],svg[icomoon-free-price-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 0h-6c-.412 0-.989.239-1.28.53L4.531 7.969a.75.75 0 0 0 0 1.061l6.439 6.439a.75.75 0 0 0 1.061 0L19.47 8.03c.292-.292.53-.868.53-1.28v-6a.75.75 0 0 0-.75-.75M15.5 6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15.5 6"></svg:path><svg:path fill="currentColor" d="M2 8.5L10.5 0H9.25c-.412 0-.989.239-1.28.53L.531 7.969a.75.75 0 0 0 0 1.061l6.439 6.439a.75.75 0 0 0 1.061 0l.47-.47z"></svg:path>`,
})
export class IcomoonFreePriceTagsIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
