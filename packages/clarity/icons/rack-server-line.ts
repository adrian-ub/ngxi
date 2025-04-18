import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRackServerLineIcon],svg[clarity-rack-server-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9h2v2H6z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M10 9h14v2H10z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M6 17h2v2H6z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M10 17h14v2H10z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h28v6H4Zm0 8h28v6H4Zm0 14v-6h28v6Z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M6 25h2v2H6z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M10 25h14v2H10z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRackServerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
