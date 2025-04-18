import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceFlashAllowedIcon],svg[guidance-flash-allowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.05 2.05a2.8 2.8 0 0 0 3.136.571A2.8 2.8 0 0 0 17 0a2.8 2.8 0 0 0 1.814 2.621a2.8 2.8 0 0 0 3.136-.57a2.8 2.8 0 0 0-.571 3.135A2.8 2.8 0 0 0 24 7M3 11.5h2m16.5-3h-3a3 3 0 0 1-3-3h-6a3 3 0 0 1-3 3h-6v13h18a3 3 0 0 0 3-3zm-5 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></svg:path>`,
})
export class GuidanceFlashAllowedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
