import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityUserSolidIcon],svg[clarity-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.5 1.5 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-.39-.98" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:circle cx="18" cy="10" r="7" fill="currentColor" class="clr-i-solid clr-i-solid-path-2"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUserSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
