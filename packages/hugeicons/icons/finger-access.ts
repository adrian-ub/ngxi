import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFingerAccessIcon],svg[hugeicons-finger-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 12a6 6 0 1 0-12 0c0 3.314 1 5.5 3 8"></svg:path><svg:path d="M15 21c-5.5-3.5-6-7.343-6-9a3 3 0 1 1 6 0a3 3 0 1 0 6 0a9 9 0 1 0-17.777 2"></svg:path><svg:path d="M12 12c.5 5 5.5 7 5.5 7"></svg:path></svg:g>`,
})
export class HugeiconsFingerAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
