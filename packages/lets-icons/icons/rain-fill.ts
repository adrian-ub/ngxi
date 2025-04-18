import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRainFillIcon],svg[lets-icons-rain-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M6 14h12a3 3 0 1 0 0-6c-.64 0-1.174-.461-1.436-1.045a5 5 0 0 0-9.128 0C7.174 7.539 6.64 8 6 8a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 19v-2m5 3v-3M7 21v-4"></svg:path></svg:g>`,
})
export class LetsIconsRainFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
