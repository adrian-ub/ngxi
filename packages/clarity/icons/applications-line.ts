import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityApplicationsLineIcon],svg[clarity-applications-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H4v2h6V4H8z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M19 8h-4v2h6V4h-2z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M30 4v4h-4v2h6V4z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M8 19H4v2h6v-6H8z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M19 19h-4v2h6v-6h-2z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M30 19h-4v2h6v-6h-2z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M8 30H4v2h6v-6H8z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M19 30h-4v2h6v-6h-2z" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="currentColor" d="M30 30h-4v2h6v-6h-2z" class="clr-i-outline clr-i-outline-path-9"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityApplicationsLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
