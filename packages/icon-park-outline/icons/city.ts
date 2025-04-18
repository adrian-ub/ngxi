import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCityIcon],svg[icon-park-outline-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42h40"></svg:path><svg:rect width="8" height="16" x="8" y="26" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M12 34h1"></svg:path><svg:rect width="24" height="38" x="16" y="4" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path fill="currentColor" d="M22 10h4v4h-4zm8 0h4v4h-4zm-8 7h4v4h-4zm8 0h4v4h-4zm0 7h4v4h-4zm0 7h4v4h-4z"></svg:path></svg:g>`,
})
export class IconParkOutlineCityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
