import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLuggageIcon],svg[icon-park-outline-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="26" x="8" y="14" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M20 23v8"></svg:path><svg:path stroke-linejoin="round" d="M15 40v4m18-4v4"></svg:path><svg:path d="M28 23v8"></svg:path><svg:path stroke-linejoin="round" d="M19 4h10m-5 0v10"></svg:path></svg:g>`,
})
export class IconParkOutlineLuggageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
