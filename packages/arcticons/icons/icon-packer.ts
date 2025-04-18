import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIconPackerIcon],svg[arcticons-icon-packer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:rect width="4" height="4" x="22" y="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="16" y="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="28" y="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="22" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="16" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="28" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="22" y="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="16" y="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="28" y="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26 5.5V7c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V5.5m-2 0V7c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V5.5m16 0V7c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V5.5"></svg:path><svg:rect width="4" height="4" x="22" y="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="16" y="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="28" y="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="22" y="34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="16" y="34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="4" height="4" x="28" y="34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26 42.5V41c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1.5m-2 0V41c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1.5m16 0V41c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1.5"></svg:path>`,
})
export class ArcticonsIconPackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
