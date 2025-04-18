import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWinkIcon],svg[hugeicons-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 14a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-1-6s-1 1-1 2c.75-1 2.25-1 3 0M8.009 9H8m5.5 7l.735 1.32c.409.65 1.315.873 2.024.498c.709-.376.951-1.207.542-1.857L16 15"></svg:path></svg:g>`,
})
export class HugeiconsWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
