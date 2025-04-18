import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChefIcon],svg[hugeicons-chef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.398 4.41A3.601 3.601 0 0 1 21 7.405A3.6 3.6 0 0 1 17.625 11H17m-1.602-6.59a3.602 3.602 0 0 0-6.796 0m6.796 0a3.6 3.6 0 0 1 .089 2.093m-5.769-.9A3.6 3.6 0 0 0 8.602 4.41m0 0A3.601 3.601 0 0 0 3 7.405A3.6 3.6 0 0 0 6.375 11H7m10 3v-4M7 14v-4m11 4.5c-1.599-.622-3.7-1-6-1s-4.4.378-6 1M17 17a5 5 0 0 1-10 0" color="currentColor"></svg:path>`,
})
export class HugeiconsChefIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
