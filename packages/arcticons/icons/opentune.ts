import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpentuneIcon],svg[arcticons-opentune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.73 26.165c-1.047 7.195-7.242 12.72-14.728 12.72c-8.221 0-14.886-6.664-14.886-14.885S15.781 9.115 24.002 9.115"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.81 22.147a14.87 14.87 0 0 0-9.966-12.312c-.407-.138-.984.015-.984.775v13.322m-.005.04a3.827 3.827 0 1 1-7.654 0a3.827 3.827 0 0 1 7.654 0"></svg:path>`,
})
export class ArcticonsOpentuneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
