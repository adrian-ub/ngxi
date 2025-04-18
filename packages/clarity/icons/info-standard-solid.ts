import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityInfoStandardSolidIcon],svg[clarity-info-standard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2.1a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-.1 5.28a2 2 0 1 1-2 2a2 2 0 0 1 2-2m3.6 21.25h-7a1.4 1.4 0 1 1 0-2.8h2.1v-9.2H15a1.4 1.4 0 1 1 0-2.8h4.4v12h2.1a1.4 1.4 0 1 1 0 2.8" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityInfoStandardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
