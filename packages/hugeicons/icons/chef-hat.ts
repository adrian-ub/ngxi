import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChefHatIcon],svg[hugeicons-chef-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 13a4 4 0 1 0-2.225-7.325M6 13a4 4 0 1 1 2.225-7.325m7.55 0a4.002 4.002 0 0 0-7.55 0m7.55 0A4 4 0 0 1 15.874 8m-6.41-1a4 4 0 0 0-1.24-1.325M6 17.5c1.599-.622 3.7-1 6-1s4.401.378 6 1M5 21c1.866-.622 4.316-1 7-1s5.134.378 7 1m-1-9v8M6 12v8" color="currentColor"></svg:path>`,
})
export class HugeiconsChefHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
