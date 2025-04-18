import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRackServerSolidIcon],svg[clarity-rack-server-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22h32v-8H2Zm8-5h14v2H10Zm-4 0h2v2H6Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M32 4H4a2 2 0 0 0-2 2v6h32V6a2 2 0 0 0-2-2M8 9H6V7h2Zm16 0H10V7h14Z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M2 30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6H2Zm8-3h14v2H10Zm-4 0h2v2H6Z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRackServerSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
