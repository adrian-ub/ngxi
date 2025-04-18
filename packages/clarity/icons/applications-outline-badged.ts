import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityApplicationsOutlineBadgedIcon],svg[clarity-applications-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H4v2h6V4H8z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M19 8h-4v2h6V4h-2z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M8 19H4v2h6v-6H8z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M19 19h-4v2h6v-6h-2z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M30 19h-4v2h6v-6h-2z" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:path fill="currentColor" d="M8 30H4v2h6v-6H8z" class="clr-i-outline--badged clr-i-outline-path-6--badged"></svg:path><svg:path fill="currentColor" d="M19 30h-4v2h6v-6h-2z" class="clr-i-outline--badged clr-i-outline-path-7--badged"></svg:path><svg:path fill="currentColor" d="M30 30h-4v2h6v-6h-2z" class="clr-i-outline--badged clr-i-outline-path-8--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-9--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityApplicationsOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
