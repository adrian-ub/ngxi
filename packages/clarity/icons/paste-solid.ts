import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPasteSolidIcon],svg[clarity-paste-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 12h-4v2h4v2h2v-2a2 2 0 0 0-2-2" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M30 18h2v6h-2z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M30 30h-2v2h2a2 2 0 0 0 2-2v-4h-2Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:rect width="20" height="20" x="4" y="4" fill="currentColor" class="clr-i-solid clr-i-solid-path-4" rx="2" ry="2"></svg:rect><svg:path fill="currentColor" d="M20 30h6v2h-6z" class="clr-i-solid clr-i-solid-path-5"></svg:path><svg:path fill="currentColor" d="M14 26h-2v4a2 2 0 0 0 2 2h4v-2h-4Z" class="clr-i-solid clr-i-solid-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPasteSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
