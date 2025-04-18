import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCompassIcon],svg[twemoji-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#F4900C"></svg:circle><svg:circle cx="18" cy="18" r="14.5" fill="#FFD983"></svg:circle><svg:circle cx="18" cy="18" r="13" fill="#F5F8FA"></svg:circle><svg:path fill="#CCD6DD" d="m18 8l1.531 6.304l5.54-3.375l-3.375 5.54L28 18l-6.304 1.531l3.375 5.54l-5.54-3.375L18 28l-1.531-6.304l-5.54 3.375l3.375-5.54L8 18l6.304-1.531l-3.375-5.54l5.54 3.375z"></svg:path><svg:path fill="#292F33" d="m17.343 20.748l8.777 5.381l-5.379-8.778z"></svg:path><svg:path fill="#DD2E44" d="M18.657 15.267L9.879 9.886l5.38 8.779z"></svg:path><svg:circle cx="18" cy="18.008" r="3.055" fill="#8899A6"></svg:circle><svg:circle cx="18" cy="18.008" r="1.648" fill="#F5F8FA"></svg:circle>`,
})
export class TwemojiCompassIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
