import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScreenshotTwoIcon],svg[icon-park-screenshot-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24V4H44V24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M10 44C13.3137 44 16 41.3137 16 38C16 34.6863 13.3137 32 10 32C6.68629 32 4 34.6863 4 38C4 41.3137 6.68629 44 10 44Z" clip-rule="evenodd"></svg:path><svg:path d="M36 12C20.3905 33.2663 15.8047 40.6805 14.2426 42.2426C11.8995 44.5858 8.10047 44.5858 5.75732 42.2426"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 44C41.3137 44 44 41.3137 44 38C44 34.6863 41.3137 32 38 32C34.6863 32 32 34.6863 32 38C32 41.3137 34.6863 44 38 44Z" clip-rule="evenodd"></svg:path><svg:path d="M42.2426 42.2426C39.8995 44.5858 36.1005 44.5858 33.7574 42.2426C32.1953 40.6805 27.6095 33.2663 12 12"></svg:path></svg:g>`,
})
export class IconParkScreenshotTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
