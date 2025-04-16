import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChromeIcon],svg[lucide-chrome-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="M21.17 8H12M3.95 6.06L8.54 14m2.34 7.94L15.46 14"></svg:path></svg:g>`,
})
export class LucideChromeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
